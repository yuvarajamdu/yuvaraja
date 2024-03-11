import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoLink = styled(Link)`
    text-decoration: none;
`

export const GamingVideoItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 300px;
`

export const ThumbnailImage = styled.img`
    height: 300px;
    width: 300px;
    align-self: center;
`

export const Heading = styled.h1`
    font-family: "Roboto";
    font-size: 16px;
    color: ${props => props.color};
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const ViewsDate = styled.p`
    font-family: "Roboto";
    font-size: 12px;
    color: ${props => props.color};
`
