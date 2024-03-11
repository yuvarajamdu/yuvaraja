import styled from 'styled-components'

export const VideoPlayer = styled.div`
    padding: 10px;
`
export const VideoTitle = styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    color: ${props => props.color};
`
export const VideoStatus = styled.p`
    font-family: 'Roboto';
    font-size: 14px;
    color: ${props => props.color};
`
export const VideoStatusCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const VideoSpan = styled.span`
    height: 20px;
    width: 20px;
    padding: 5px;
    border-radius: 50%;
`
export const ButtonsCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`
export const BtnCont = styled.div`
    display: flex;
    background: none;
`
export const CustomButton = styled.button`
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    margin-right: 10px;
    color: ${props => props.color};
`
export const Text = styled.span`
    margin-left: 5px;
    color: #2563eb;
    @media screen and (max-width: 576px){
        display: none;
    }
`
export const HrStyle = styled.hr`
    border: solid 1px #909090;
`
export const ChannelImage = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 15px;
`
export const ChannelCont = styled.div`
    display: flex;
    margin-top: 15px;
`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
`
export const Name = styled.p`
    font-family: 'Roboto';
    font-size: 16px;
    color: ${props => props.color};
`
export const Subscribers = styled.p`
    font-family: 'Roboto';
    font-size: 12px;
    color: ${props => props.color};
`
export const Para = styled.p`
    font-family: 'Roboto';
    font-size: 16px;
    color: ${props => props.color};
`
