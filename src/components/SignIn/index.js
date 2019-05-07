import React, { Component } from 'react'
import { SignUpLink } from '../SignUp'
import SignInForm from './SignInForm'
import { PasswordForgotLink } from '../PasswordForgot'

export default class SignInPage extends Component {
  render() {
    return (
      <div>
        <h1>Sign in</h1>

        <SignInForm />
        <PasswordForgotLink />
        <SignUpLink />
      </div>
    )
  }
}

export { SignInForm }
