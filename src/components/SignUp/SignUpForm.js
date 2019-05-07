import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'
import * as ROUTES from '../../constants/routes'

class SignUpForm extends Component {
  static contextType = FirebaseContext

  initialState = {
    username: '',
    email: '',
    password: '',
    passwordVerify: '',
    error: null,
  }

  state = this.initialState

  onSubmit = event => {
    event.preventDefault()

    const firebase = this.context
    const { username, email, password } = this.state
    const { history } = this.props

    firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return firebase.user(authUser.user.uid).set({
          username,
          email,
        })
      })
      .then(() => {
        this.setState({ ...this.initialState })
        history.push(ROUTES.DASHBOARD)
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { username, email, password, passwordVerify, error } = this.state

    const isInvalid =
      password !== passwordVerify || password === '' || email === '' || username === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Username"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordVerify"
          value={passwordVerify}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

export default withRouter(SignUpForm)
