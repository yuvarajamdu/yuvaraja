import {Link} from 'react-router-dom'
import ThemeVideoContext from '../../context/ThemeVideoContext'

import {
  VideoItem,
  VideoDetails,
  ThumbnailImage,
  ProfileImage,
  Content,
  Title,
  ChannelName,
  ViewsAndDate,
  Span,
} from './styledComponents.js'

const HomeVideoDetails = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = video

  return (
    <ThemeVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`}>
            <VideoItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <Content>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsAndDate color={textColor}>
                    {viewCount} views<Span> &#8226; </Span> {publishedAt}
                  </ViewsAndDate>
                </Content>
              </VideoDetails>
            </VideoItem>
          </Link>
        )
      }}
    </ThemeVideoContext.Consumer>
  )
}

export default HomeVideoDetails
