import React, { Component } from 'react'
import { FirebaseContext } from '../Firebase'

class SignOutButton extends Component {
  static contextType = FirebaseContext

  render() {
    const firebase = this.context

    return (
      <button type="button" onClick={firebase.doSignOut}>
        Sign Out
      </button>
    )
  }
}

export default SignOutButton
