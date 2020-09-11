import React, { Component } from 'react'

export default class Profile extends Component {
    
    handleUserProps () {
        if (this.props.userProps.loading) {
            return <div>Loading ... </div>
        } else {
        return this.props.userProps.user.map(user => <h3 key={user.id}><li>User Name: {user.name}</li><li>User Email: {user.email}</li></h3>)
        }
    }
    
    render() {
        console.log(this.props)
        return (
            <div className='profile'>
                {this.props.userProps.logged_in ? this.handleUserProps() : <h2>There is no user logged in</h2>}
            </div>
        )
    }
}


