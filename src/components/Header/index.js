import {withRouter} from 'react-router-dom'
import ThemeVideoContext from '../../context/ThemeVideoContext'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import {
  Logo,
  Navbar,
  LogoHeader,
  ListContainer,
  ThemeButton,
  LogoutIcon,
  LogoutButton,
  ProfileImage,
  ModalContainer,
  CloseButton,
  OkButton,
  ModalPara,
  ButtonsContainer,
} from './styledComponents'

const Header = props => (
  <ThemeVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
      const color = isDarkTheme ? `#ffffff` : '#00306e'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <Navbar bgColor={bgColor}>
          <Logo to="/">
            <LogoHeader
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Logo>
          <ListContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon color="#000000" size={25} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutButton type="button" bgColor={bgColor} color={color}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalPara>Are you sure, you want to logout?</ModalPara>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      onClick={() => close()}
                      data-testid="closeButton"
                    >
                      Cancel
                    </CloseButton>
                    <OkButton type="button" onClick={onClickLogout}>
                      Confirm
                    </OkButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIcon type="button">
                  <FiLogOut size={25} color={color} />
                </LogoutIcon>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalPara>Are you sure, you want to Logout?</ModalPara>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <OkButton type="button" onClick={onClickLogout}>
                      Confrim
                    </OkButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </ListContainer>
        </Navbar>
      )
    }}
  </ThemeVideoContext.Consumer>
)

export default withRouter(Header)
