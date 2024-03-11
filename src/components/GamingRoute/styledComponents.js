import styled from 'styled-components'

export const GamingContainer = styled.div`
    background-color: ${props => props.bgColor};
    min-height: 100vh;
    overflow-y: auto;
    margin-top: 20px;
    margin-bottom: 20px;
`
export const TitleIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: 50px;
    width: 50px;
`
export const VideoHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center
`
export const VideoList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
`
export const Para = styled.h1`
    font-family: 'Roboto';
    font-size: 22px;
    color: ${props => props.color};
`
export const LoaderContainer = styled.div`
    min-height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
