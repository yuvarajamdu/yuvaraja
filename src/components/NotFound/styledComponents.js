import styled from 'styled-components'

export const NotFoundContainer = styled.div`
    background-color: ${props => props.bgColor};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    margin-bottom: 25px;
    margin-top: 25px;
    margin-left: 30px;
`
export const NotFoundView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none;
`
export const Image = styled.img`
    height: 300px;
    width: 230px;
    @media screen and (min-width: 768px) {
        height: 600px;
        width: 400px;
    }
`
export const Heading = styled.h1`
    font-family: "Roboto";
    font-size: 22px;
    color: ${props => props.headColor};
    text-align: center;
`
export const Para = styled.p`
    font-family: "Roboto";
    font-size: 16px;
    color: ${props => props.paraColor};
    text-align: center;
`
