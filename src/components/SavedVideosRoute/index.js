import {CgPlayListAdd} from 'react-icons/cg'
import ThemeVideoContext from '../../context/ThemeVideoContext'
import NavigationBar from '../NavigationBar'
import Header from '../Header'
import VideoDetails from '../VideoDetails'

import {
  SavedVideoContainer,
  TitleAndIconContainer,
  VideoTitle,
  VideosList,
  Text,
  NoVideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosPara,
} from './styledComponents'

const SavedVideosRoute = () => (
  <ThemeVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const paraColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedVideoContainer data-testid="savedVideos" bgColor={bgColor}>
            <VideoTitle>
              <TitleAndIconContainer>
                <CgPlayListAdd size={35} color="#ff0000" />
              </TitleAndIconContainer>
              <Text color={textColor}>Saved Videos</Text>
            </VideoTitle>
            {savedVideos.length > 0 ? (
              <VideosList>
                {savedVideos.map(eachItem => (
                  <VideoDetails key={eachItem.id} videoDetails={eachItem} />
                ))}
              </VideosList>
            ) : (
              <NoVideosView>
                <NoVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoVideosHeading headColor={headColor}>
                  No saved videos
                </NoVideosHeading>
                <NoVideosPara paraColor={paraColor}>
                  You can save your videos while watching them
                </NoVideosPara>
              </NoVideosView>
            )}
          </SavedVideoContainer>
        </>
      )
    }}
  </ThemeVideoContext.Consumer>
)

export default SavedVideosRoute
