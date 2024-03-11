import styled from 'styled-components'

export const BgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 5px;
    width: 350px;
`
export const Logo = styled.img`
    height: 40px;
    width: 80px;
    margin-bottom: 10px;
    align-self: center;
`
export const InputCont = styled.div`
    width: 100%;
`
export const LoginButton = styled.button`
    background-color: #4f46e5;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 15px;
`
export const SubmitError = styled.p`
    font-family: "Roboto";
    font-size: 14px;
    color: #ff0b37;
`
export const LableItem = styled.label`
    font-family: "Roboto";
    font-size: 12px;
    color: #475569;
`
export const InputItem = styled.input`
    font-family: "Roboto";
    font-size: 12px;
    color: #475569;
    outline: none;
    border: solid 1px #94a3b8;
    border-radius: 5px;
    margin-bottom: 10px;
`
export const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`
export const Checkbox = styled.input`
    height: 20px;
    width: 20px;
    margin-right: 10px;
`
export const ShowPassword = styled.label`
    font-family: "Roboto";
    font-size: 14px;
    color: #1e293b;
`