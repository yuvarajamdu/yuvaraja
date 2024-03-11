import styled from 'styled-components'

export const NoVideosView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Image = styled.img`
    height: 250px;
    width: 240px;
`
export const Heading = styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    color: ${props => props.headColor};
`
export const Para = styled.p`
    font-family: 'Roboto';
    font-size: 16px;
    color: ${props => props.paraColor};
`
export const RetryButton = styled.button`
    background-color: #4f46e5;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    padding: 5px 10px;
`
export const VideoList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style-type: none;
`
