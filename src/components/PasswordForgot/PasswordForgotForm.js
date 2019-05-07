import React, { Component } from 'react'
import { FirebaseContext } from '../Firebase'

export default class PasswordForgotForm extends Component {
  static contextType = FirebaseContext

  initialState = {
    email: '',
    error: null,
  }
  state = this.initialState

  onSubmit = event => {
    const { email } = this.state
    const firebase = this.context

    firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...this.initialState })
      })
      .catch(error => {
        this.setState({ error })
      })

    event.preventDefault()
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { email, error } = this.state

    const isInvalid = email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}
