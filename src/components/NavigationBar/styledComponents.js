import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavigationContainerLg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    width: 250px;
    background-color: ${props => props.bgColor};
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavigationContainerSm = styled.nav`
    background-color: ${props => props.bgColor};
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const NavLists = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    flex-grow: 1;
`
export const NavLink = styled(Link)`
    text-decoration: none;
`
export const NavLinkCont = styled.li`
    background-color: ${props => props.bgColor};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
`
export const Text = styled.p`
    font-family: "Roboto";
    font-size: 16px;
    color: ${props => props.color};
    margin-left: 10px;
`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
`
export const Heading = styled.p`
    font-family: "Roboto";
    font-size: 22px;
    color: ${props => props.color};
    font-weight: 800;
`
export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
export const Para = styled.p`
    font-family: "Roboto";
    font-size: 15px;
    color: ${props => props.color};
`
export const Image = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
`

export const NavBar = styled.div`
    display: flex;
`
