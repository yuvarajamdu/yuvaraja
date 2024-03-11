import styled from 'styled-components'

export const ViewContainer = styled.div`
    background-color: ${props => props.bgColor};
    min-height: 100vh;
    margin-top: 30px;
    margin-bottom: 30px;
    @media screen and (min-width: 768px) {
        margin-left: 180px;
        margin-bottom: 0px;
    }
`
export const LoaderCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
`