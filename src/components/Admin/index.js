import React, { Component } from 'react'
import { FirebaseContext } from '../Firebase'

export default class AdminPage extends Component {
  static contextType = FirebaseContext

  state = {
    loading: false,
    users: [],
  }

  componentDidMount() {
    const firebase = this.context

    this.setState({ loading: true })

    firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val()

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }))

      this.setState({
        users: usersList,
        loading: false,
      })
    })
  }

  componentWillUnmount() {
    const firebase = this.context

    firebase.users().off()
  }

  render() {
    const { users, loading } = this.state

    return (
      <div>
        <h1>Admin</h1>
        {loading && <div>Loading ...</div>}

        <UserList users={users} />
      </div>
    )
  }
}

const UserList = ({ users }) => (
  <>
    {users.map(user => (
      <ul key={user.uid}>
        <li>
          <strong>ID:</strong> {user.uid}
        </li>
        <li>
          <strong>Email:</strong> {user.email}
        </li>
        <li>
          <strong>Username:</strong> {user.username}
        </li>
      </ul>
    ))}
  </>
)
