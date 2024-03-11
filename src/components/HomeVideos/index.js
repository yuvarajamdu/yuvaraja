import ThemeVideoContext from '../../context/ThemeVideoContext'
import HomeVideoDetails from '../HomeVideoDetails'
import {
  NoVideosView,
  Image,
  Heading,
  Para,
  RetryButton,
  VideoList,
} from './styledComponents'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videoCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const paraColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videoCount > 0 ? (
          <VideoList>
            {homeVideos.map(eachItem => (
              <HomeVideoDetails video={eachItem} key={eachItem.id} />
            ))}
          </VideoList>
        ) : (
          <NoVideosView>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Heading headColor={headColor}>No Search results found</Heading>
            <Para paraColor={paraColor}>
              Try different keywords or remove search filter
            </Para>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosView>
        )
      }}
    </ThemeVideoContext.Consumer>
  )
}

export default HomeVideos
