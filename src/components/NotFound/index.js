import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeVideoContext from '../../context/ThemeVideoContext'
import {
  NotFoundContainer,
  NotFoundView,
  Image,
  Heading,
  Para,
} from './styledComponents'

const NotFound = () => (
  <ThemeVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const paraColor = isDarkTheme ? '#e2e8f0' : '#475569'
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundView>
              <Image src={imageUrl} alt="not found" />
              <Heading headColor={headColor}>Page Not Found</Heading>
              <Para paraColor={paraColor}>
                We are sorry, the page you requested could not be found.
              </Para>
            </NotFoundView>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeVideoContext.Consumer>
)

export default NotFound
