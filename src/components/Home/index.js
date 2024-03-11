import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import ThemeVideoContext from '../../context/ThemeVideoContext'
import HomeVideos from '../HomeVideos'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureSection from '../FailureSection'

import {
  HomeContainer,
  BannerContainer,
  Image,
  Text,
  Button,
  LeftBanner,
  RightBanner,
  CloseButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    homeVideos: [],
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        homeVideos: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderLoaderSection = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosSection = () => {
    const {homeVideos} = this.state
    return <HomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  renderFailureSection = () => <FailureSection onRetry={this.onRetry} />

  renderHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosSection()
      case apiStatusConstants.failure:
        return this.renderFailureSection()
      case apiStatusConstants.inProgress:
        return this.renderLoaderSection()
      default:
        return null
    }
  }

  render() {
    const {searchInput, bannerDisplay} = this.state

    return (
      <ThemeVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'

          return (
            <>
              <Header />
              <NavigationBar />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <BannerContainer data-testid="banner" display={display}>
                  <LeftBanner>
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <Text>
                      Buy Nxt Watch Premium prepaid plans with <br /> UPI
                    </Text>
                    <Button type="button">GET IT NOW</Button>
                  </LeftBanner>
                  <RightBanner>
                    <CloseButton
                      data-testid="close"
                      onClick={this.onCloseBanner}
                    >
                      <AiOutlineClose size={25} />
                    </CloseButton>
                  </RightBanner>
                </BannerContainer>
                <SearchContainer>
                  <SearchInput
                    type="search"
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                    color={textColor}
                    placeholder="Search"
                  />
                  <SearchIconContainer
                    data-testid="searchButton"
                    onClick={this.getSearchResults}
                  >
                    <AiOutlineSearch size={20} />
                  </SearchIconContainer>
                </SearchContainer>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeVideoContext.Consumer>
    )
  }
}

export default Home
