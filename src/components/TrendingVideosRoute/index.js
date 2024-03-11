import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeVideoContext from '../../context/ThemeVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureSection from '../FailureSection'
import VideoDetails from '../VideoDetails'

import {
  TrendingVideoContainer,
  TitleAndIconContainer,
  VideoTitle,
  VideosList,
  Text,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingVideosRoute extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
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
    const {trendingVideos} = this.state

    return (
      <VideosList>
        {trendingVideos.map(eachItem => (
          <VideoDetails key={eachItem.id} videoDetails={eachItem} />
        ))}
      </VideosList>
    )
  }

  onRetry = () => {
    this.getVideos()
  }

  renderFailureSection = () => <FailureSection onRetry={this.onRetry} />

  renderTrendingVideosRoute = () => {
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
          const {isDarkTheme, toggleTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <div data-testid="trending">
              <Header />
              <NavigationBar />
              <TrendingVideoContainer
                data-testid="trending"
                style={{backgroundColor: bgColor}}
                onClick={toggleTheme}
              >
                <VideoTitle>
                  <TitleAndIconContainer>
                    <HiFire size={35} color="#ff0000" />
                  </TitleAndIconContainer>
                  <Text color={textColor}>Trending</Text>
                </VideoTitle>
                {this.renderTrendingVideosRoute()}
              </TrendingVideoContainer>
            </div>
          )
        }}
      </ThemeVideoContext.Consumer>
    )
  }
}

export default TrendingVideosRoute
