import ThemeVideoContext from '../../context/ThemeVideoContext'
import {
  FailureContainer,
  FailImage,
  FailHeading,
  FailedPara,
  RetryButton,
} from './styledComponents'

const FailureSection = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const paraColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const failImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailImage src={failImageUrl} alt="failure view" />
            <FailHeading headColor={headColor}>
              Oops! Something Went Wrong
            </FailHeading>
            <FailedPara paraColor={paraColor}>
              We are having some trouble to complete tour request.
              <br /> Please try again later.
            </FailedPara>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeVideoContext.Consumer>
  )
}

export default FailureSection
