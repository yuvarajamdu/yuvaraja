import styled from 'styled-components'

export const SavedVideoContainer = styled.div`
    background-color: ${props => props.bgColor};
    background-size: cover;
    min-height: 100vh;
    margin-top: 25px;
    margin-bottom: 25px;
    overflow-y: auto;
    @media screen and (min-width: 768px) {
        margin-left: 200px;
    }
`
export const TitleAndIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-left: 20px;
`
export const VideoTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const VideosList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
`
export const Text = styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    color: ${props => props.color};
`
export const NoVideosView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const NoVideosImage = styled.img`
    height: 450px;
    width: 200px;
    @media screen and (min-width: 768px) {
        width: 450px;
    }
`
export const NoVideosHeading = styled.h1`
    font-family: 'Roboto';
    font-size: 25px;
    color: ${props => props.headColor};
    text-align: center;
`
export const NoVideosPara = styled.p`
    font-family: 'Roboto';
    font-size: 16px;
    color: ${props => props.paraColor};
    text-align: center;
`
