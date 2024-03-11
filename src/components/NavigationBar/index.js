import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeVideoContext from '../../context/ThemeVideoContext'

import {
  NavigationContainerLg,
  NavLists,
  NavLink,
  NavLinkCont,
  Text,
  Info,
  Heading,
  Icons,
  Para,
  Image,
  NavigationContainerSm,
  NavBar,
} from './styledComponents'

class NavigationBar extends Component {
  renderNavItems = () => (
    <ThemeVideoContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const activeTabBgColor = isDarkTheme ? '#475569' : '#cbd5e1'

        const onClickHome = () => {
          changeTab('Home')
        }

        const onClickTrending = () => {
          changeTab('Trending')
        }

        const onClickGaming = () => {
          changeTab('Gaming')
        }

        const onClickSaved = () => {
          changeTab('Saved')
        }

        return (
          <NavBar>
            <NavigationContainerLg bgColor={bgColor}>
              <NavLists>
                <NavLink to="/">
                  <NavLinkCont
                    key="home"
                    bgColor={activeTab === 'Home' ? activeTabBgColor : 'none'}
                    onClick={onClickHome}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <Text color={textColor}>Home</Text>
                  </NavLinkCont>
                </NavLink>

                <NavLink to="/trending">
                  <NavLinkCont
                    key="trending"
                    bgColor={
                      activeTab === 'Trending' ? activeTabBgColor : 'none'
                    }
                    onClick={onClickTrending}
                  >
                    <HiFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <Text color={textColor}>Trending</Text>
                  </NavLinkCont>
                </NavLink>

                <NavLink to="/gaming">
                  <NavLinkCont
                    key="gaming"
                    bgColor={activeTab === 'Gaming' ? activeTabBgColor : 'none'}
                    onClick={onClickGaming}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <Text color={textColor}>Gaming</Text>
                  </NavLinkCont>
                </NavLink>

                <NavLink to="/saved-videos">
                  <NavLinkCont
                    key="saved"
                    bgColor={activeTab === 'Saved' ? activeTabBgColor : 'none'}
                    onClick={onClickSaved}
                  >
                    <CgPlayListAdd
                      size={30}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <Text color={textColor}>Saved Videos</Text>
                  </NavLinkCont>
                </NavLink>
              </NavLists>
              <Info>
                <Heading color={textColor}>CONTACT US</Heading>
                <Icons>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </Icons>
                <Para color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </Para>
              </Info>
            </NavigationContainerLg>
            <NavigationContainerSm bgColor={bgColor}>
              <NavLink to="/">
                <AiFillHome
                  size={30}
                  onClick={onClickHome}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/trending">
                <HiFire
                  size={30}
                  onClick={onClickTrending}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/gaming">
                <SiYoutubegaming
                  size={30}
                  onClick={onClickGaming}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/saved-videos">
                <CgPlayListAdd
                  size={30}
                  onClick={onClickSaved}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
            </NavigationContainerSm>
          </NavBar>
        )
      }}
    </ThemeVideoContext.Consumer>
  )

  render() {
    return <>{this.renderNavItems()}</>
  }
}

export default NavigationBar
