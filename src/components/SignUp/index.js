import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import * as ROUTES from '../../constants/routes'

export default class SignUpPage extends Component {
  render() {
    return (
      <div>
        <h1>Sign up</h1>

        <SignUpForm />
      </div>
    )
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)

export { SignUpLink }
