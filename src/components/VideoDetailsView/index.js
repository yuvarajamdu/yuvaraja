import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ThemeVideoContext from '../../context/ThemeVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureSection from '../FailureSection'
import VideoView from '../VideoView'
import {ViewContainer, LoaderCont} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetailsView extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: [],
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.name,
    profileImageUrl: data.video_details.profile_image_url,
    subscriberCount: data.video_details.subscriber_count,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.formattedData(data)
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  clickDisLiked = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderLoadingSection = () => (
    <LoaderCont data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderCont>
  )

  renderVideoView = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state

    return (
      <VideoView
        videoDetails={videoDetails}
        clickLiked={this.clickLiked}
        clickDisLiked={this.clickDisLiked}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
      />
    )
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  renderFailureSection = () => <FailureSection onRetry={this.onRetry} />

  renderVideoDetailsSection = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoView()
      case apiStatusConstants.failure:
        return this.renderFailureSection()
      case apiStatusConstants.inProgress:
        return this.renderLoadingSection()
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

          return (
            <>
              <Header />
              <NavigationBar />
              <ViewContainer data-testid="videoItemDetails" bgColor={bgColor}>
                {this.renderVideoDetailsSection()}
              </ViewContainer>
            </>
          )
        }}
      </ThemeVideoContext.Consumer>
    )
  }
}

export default VideoDetailsView