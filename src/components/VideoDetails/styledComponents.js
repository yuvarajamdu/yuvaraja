import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
    text-decoration: none;
`

export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  @media screen and (min-width:768px) {
    flex-direction: row;
    margin-right: 10px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const VideoDetailCont = styled.div`
  display: flex;
  width: 100%;
`
export const ProfileImage = styled.img`
  height: 25px;
  width: 325x;
  border-radius: 50%;
  margin: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ContentCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
export const ViewsAndDateCont = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
export const Span = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
`
