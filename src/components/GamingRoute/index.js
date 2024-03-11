import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import NavigationBar from '../NavigationBar'
import Header from '../Header'
import FailureSection from '../FailureSection'
import ThemeVideoContext from '../../context/ThemeVideoContext'
import GamingVideoDetails from '../GamingVideoDetails'

import {SiYoutubegaming} from 'react-icons/si'

import {
  GamingContainer,
  TitleIconContainer,
  VideoHead,
  VideoList,
  Para,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideos: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
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
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideos: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoaderSection = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosSection = () => {
    const {gamingVideos} = this.state

    return (
      <VideoList>
        {gamingVideos.map(eachItem => (
          <GamingVideoDetails key={eachItem.id} videoDetails={eachItem} />
        ))}
      </VideoList>
    )
  }

  onRetry = () => {
    this.getVideos()
  }

  renderFailureSection = () => <FailureSection onRetry={this.onRetry} />

  renderAllVideos = () => {
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
    return (
      <ThemeVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <div>
              <Header />
              <NavigationBar />
              <GamingContainer data-testid="gaming" bgColor={bgColor}>
                <VideoHead>
                  <TitleIconContainer>
                    <SiYoutubegaming size={35} color="#ff0000" />
                  </TitleIconContainer>
                  <Para color={textColor}>Gaming</Para>
                </VideoHead>
                {this.renderAllVideos()}
              </GamingContainer>
            </div>
          )
        }}
      </ThemeVideoContext.Consumer>
    )
  }
}

export default GamingRoute
