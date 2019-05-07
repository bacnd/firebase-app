import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignOutButton from '../SignOut'
import { AuthUserContext } from '../Session'
import * as ROUTES from '../../constants/routes'

class Navigation extends Component {
  static contextType = AuthUserContext

  render() {
    const authUser = this.context

    return <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
  }
}

const NavigationAuth = () => (
  <nav>
    <div>
      <Link to={ROUTES.LANDING}>Landing</Link>
      <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </div>
    <SignOutButton />
  </nav>
)

const NavigationNonAuth = () => (
  <nav>
    <div>
      <Link to={ROUTES.LANDING}>Landing</Link>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </div>
  </nav>
)

export default Navigation
