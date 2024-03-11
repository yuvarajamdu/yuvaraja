import styled from 'styled-components'

export const HomeContainer = styled.div`
    background-color: ${props => props.bgColor};
    min-height: 100vh;
    overflow-y: auto;
    margin: 25px;
    margin-left: 250px;
`

export const BannerContainer = styled.div`
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
    height: 180px;
    width: 100%;
    display: ${props => props.display};
    justify-content: space-between;
    padding: 10px;
`
export const Image = styled.img`
    height:35px;
    width: 55px;
`
export const Text = styled.p`
    font-family: "Roboto";
    font-size: 15px;
    color: #000000;
`
export const Button = styled.button`
    background: none;
    padding: 5px 10px;
    border: solid 1px #000000;
    color: #000000;
`

export const LeftBanner = styled.div`
    width: 45%;
`

export const RightBanner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`
export const CloseButton = styled.button`
    background: none;
    border: none;
    height: 25px;
    border-radius: 5px;
`
export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    border: solid 1px #909090;
    border-radius: 5px;
    width: 50%;
    height: 40px;
`

export const SearchInput = styled.input`
    background: none;
    border: none;
    padding: 5px;
    width: 95%;
    color: ${props => props.color};
    outline: none;
`
export const SearchIconContainer = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #909090;
    width: 60px;
    border: none;
`

export const LoaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 75vh;
`
