import React, { Component } from 'react'

export default class Profile extends Component {
    
    handleUserProps () {
        if (this.props.userProps.loading) {
            return <div>Loading ... </div>
        } else {
            return this.props.userProps.user.map(user => <div key={user.id}>{user.email}</div>)
        }
    }
    
    render() {
        return (
            <div>
                {this.handleUserProps()}
            </div>
        )
    }
}


