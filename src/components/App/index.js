import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForgotPage from '../PasswordForgot'
import DashboardPage from '../Dashboard'
import AccountPage from '../Account'
import AdminPage from '../Admin'
import { FirebaseContext } from '../Firebase'
import { AuthUserContext } from '../Session'
import * as ROUTES from '../../constants/routes'

export default class App extends Component {
  static contextType = FirebaseContext

  state = {
    authUser: null,
    loading: true,
  }

  componentDidMount() {
    const firebase = this.context

    this.listener = firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser, loading: false })
        : this.setState({ authUser: null, loading: false })
    })
  }

  componentWillUnmount() {
    this.listener()
  }

  render() {
    const { authUser, loading } = this.state

    // Logged out users only
    const PublicRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props => (!authUser ? <Component {...props} /> : <Redirect to={ROUTES.LANDING} />)}
      />
    )

    // Logged in users only
    const ProtectedRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props => (!!authUser ? <Component {...props} /> : <Redirect to={ROUTES.SIGN_IN} />)}
      />
    )

    // Admin only
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props => (!!authUser ? <Component {...props} /> : <Redirect to={ROUTES.SIGN_IN} />)}
      />
    )

    return (
      <AuthUserContext.Provider value={authUser}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Router>
            <Navigation />

            <Switch>
              <PublicRoute path={ROUTES.SIGN_UP} component={SignUpPage} />
              <PublicRoute path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route exact path={ROUTES.LANDING} component={LandingPage} />
              <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgotPage} />
              <Route path={ROUTES.DASHBOARD} component={DashboardPage} />
              <ProtectedRoute path={ROUTES.ACCOUNT} component={AccountPage} />
              <PrivateRoute path={ROUTES.ADMIN} component={AdminPage} />
            </Switch>
          </Router>
        )}
      </AuthUserContext.Provider>
    )
  }
}
