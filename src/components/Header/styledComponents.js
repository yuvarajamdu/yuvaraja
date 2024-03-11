import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Logo = styled(Link)`
  text-decoration: none;
`

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const LogoHeader = styled.img`
  height: 35px;
  width: 85px;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  background:none;
  border: none;
  margin-right: 10px;
`

export const LogoutIcon = styled.button`
  border: none;
  @media screen and (max-width: 768px){
    display: none;
  }
`
export const LogoutButton = styled.button`
  background-color: ${props => props.bgColor};
  border: solid 1px;
  border-color: ${props => props.color};
  color: ${props => props.color};
  paddin: 5px 10px;
  margin-left: 5px;
  @media screen and (max-width: 768px){
    display: none;
  }
`

export const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 200px;
  border-radius: 10px;
  background-color: #cbd5e1;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: solid 1px grey;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  outline: none;
  color: grey;
`
export const OkButton = styled.button`
  background-color: #3b82f6;
  border: solid 1px #3b82f6;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  color: #ffffff;
  align-self: flex-end;
`
export const ModalPara = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: #000000;
  text-align: center;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
