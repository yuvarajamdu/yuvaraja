import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  BgContainer,
  FormContainer,
  Logo,
  InputCont,
  LoginButton,
  SubmitError,
  LableItem,
  InputItem,
  CheckboxContainer,
  Checkbox,
  ShowPassword,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameSection = () => {
    const {username} = this.state

    return (
      <>
        <LableItem htmlFor="username">USERNAME</LableItem>
        <InputItem
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeHandler}
          name="username"
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordSection = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'

    return (
      <>
        <LableItem htmlFor="password">PASSWORD</LableItem>
        <InputItem
          type={inputType}
          id="password"
          value={password}
          name="password"
          onChange={this.onChangeHandler}
          placeholder="Password"
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.onShowPassword}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </CheckboxContainer>
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <BgContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputCont>{this.renderUsernameSection()}</InputCont>
          <InputCont>{this.renderPasswordSection()}</InputCont>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <SubmitError>*{errorMsg}</SubmitError>}
        </FormContainer>
      </BgContainer>
    )
  }
}

export default LoginForm
