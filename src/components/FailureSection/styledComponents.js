import styled from 'styled-components'

export const FailureContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const FailImage = styled.img`
    width: 220px;
    height: 320px;
`

export const FailHeading = styled.h1`
    font-family: 'Roboto';
    font-size: 20px;
    color: ${props => props.headColor};
    text-align: center;
`
export const FailedPara = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    color: ${props => props.paraColor};
    text-align: center;
`
export const RetryButton = styled.button`
    backgroun-color: #4f46e5;
    font-family: 'Roboto';
    font-size: 12px;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    padding: 5px 10px;
`
