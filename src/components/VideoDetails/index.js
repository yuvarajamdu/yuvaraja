import ThemeVideoContext from '../../context/ThemeVideoContext'
import {
  VideoLink,
  VideoItem,
  ThumbnailImage,
  VideoDetailCont,
  ProfileImage,
  ContentCont,
  Title,
  ChannelName,
  ViewsAndDateCont,
  Span,
} from './styledComponents'

const VideoDetails = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <VideoLink to={`/videos/${id}`}>
            <VideoItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailCont>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentCont>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsAndDateCont color={textColor}>
                    {viewCount} views <Span> &#8226; </Span> {publishedAt}{' '}
                  </ViewsAndDateCont>
                </ContentCont>
              </VideoDetailCont>
            </VideoItem>
          </VideoLink>
        )
      }}
    </ThemeVideoContext.Consumer>
  )
}

export default VideoDetails
