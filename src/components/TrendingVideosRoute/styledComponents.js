import styled from 'styled-components'

export const TrendingVideoContainer = styled.div`
    background-color: ${props => props.bgColor};
    min-height: 100vh;
    margin-top: 30px;
    margin-bottom: 30px;
    @media screen and (min-width: 768px) {
        margin-left: 200px;
    }
`
export const TitleAndIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
`
export const VideoTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
export const VideosList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
`
export const Text = styled.h1`
    font-family: 'Roboto';
    font-size: 25px;
    color: ${props => props.color};
`
export const LoaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 75vh;
`
