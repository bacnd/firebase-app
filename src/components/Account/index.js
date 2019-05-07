import React from 'react'

import { PasswordForgotForm } from '../PasswordForgot'
import { PasswordChangeForm } from '../PasswordChange'

const AccountPage = () => (
  <div>
    <h1>Account Page</h1>

    <PasswordForgotForm />
    <PasswordChangeForm />
  </div>
)

export default AccountPage
