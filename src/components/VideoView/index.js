import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import ThemeVideoContext from '../../context/ThemeVideoContext'

import {
  VideoPlayer,
  VideoTitle,
  VideoStatus,
  VideoStatusCont,
  VideoSpan,
  ButtonsCont,
  BtnCont,
  CustomButton,
  Text,
  HrStyle,
  ChannelImage,
  ChannelCont,
  Info,
  Name,
  Subscribers,
  Para,
} from './styledComponents'

const VideoView = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDisLike = () => {
    clickDisLiked()
  }

  return (
    <ThemeVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        let isSaved
        const index = savedVideos.findIndex(
          eachItem => eachItem.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIconColor = isSaved ? '#2563eb' : textColor

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <VideoTitle color={textColor}>{videoDetails.title}</VideoTitle>
            <VideoStatusCont>
              <VideoStatus color={textColor}>
                {videoDetails.viewCount} views <VideoSpan> &#8226; </VideoSpan>
              </VideoStatus>
              <ButtonsCont>
                <BtnCont>
                  <CustomButton
                    type="button"
                    color={isLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    <Text>Like</Text>
                  </CustomButton>
                </BtnCont>
                <BtnCont>
                  <CustomButton
                    type="button"
                    color={isDisLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickDisLike}
                  >
                    <AiOutlineDislike size={25} />
                    <Text>Dislike</Text>
                  </CustomButton>
                </BtnCont>
                <BtnCont>
                  <CustomButton
                    type="button"
                    color={saveIconColor}
                    onClick={onClickSave}
                  >
                    <BiListPlus size={25} />
                    <Text>{isSaved ? 'Saved' : 'Save'}</Text>
                  </CustomButton>
                </BtnCont>
              </ButtonsCont>
            </VideoStatusCont>
            <HrStyle />
            <ChannelCont>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <Info>
                <Name color={textColor}>{videoDetails.name}</Name>
                <Subscribers color={textColor}>
                  {videoDetails.subscriberCount} Subscribers
                </Subscribers>
                <Para color={textColor}>{videoDetails.description}</Para>
              </Info>
            </ChannelCont>
          </VideoPlayer>
        )
      }}
    </ThemeVideoContext.Consumer>
  )
}

export default VideoView
