import styled from 'styled-components'

export const VideoItem = styled.li`
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
`

export const VideoDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
`
export const ThumbnailImage = styled.img`
    width: 100%;
`
export const ProfileImage = styled.img`
    display: flex;
    height; 35px;
    width: 35px;
    border-radius: 50%;
    margin: 10px;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
`
export const Title = styled.p`
    font-family: 'Roboto';
    font-size: 16px;
    color: ${props => props.color};
`
export const ChannelName = styled.p`
    font-family: 'Roboto';
    font-size: 14px;
    color: ${props => props.color};
`
export const ViewsAndDate = styled.p`
    font-family: 'Roboto';
    font-size: 12px;
    color: ${props => props.color};
`
export const Span = styled.span`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    padding: 5px;
`
