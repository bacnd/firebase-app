# Firebase App

## Installation

```
git clone https://github.com/taniarascia/firebase-app
cd firebase-app
yarn
```

Add `.env` file with credentials.

```
REACT_APP_API_KEY=xxx
REACT_APP_AUTH_DOMAIN=xxx.firebaseapp.com
REACT_APP_DATABASE_URL=https://xxx.firebaseio.com
REACT_APP_PROJECT_ID=xxx
REACT_APP_STORAGE_BUCKET=xxx.appspot.com
REACT_APP_MESSAGING_SENDER_ID=xxx
```

## Routes

### Landing

- `/`

### Public only

- `/signin`
- `/signup`
- `/forgot-password`

### Protected (users) only

- `/dashboard`
- `/account`

### Private (admin) only

_WIP_

- `/admin`

## Acknowledgements

- [Robin Wieruch](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/) Firebase Authentication with React
