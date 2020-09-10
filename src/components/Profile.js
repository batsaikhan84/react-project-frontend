import React, { Component } from 'react'

export default class Profile extends Component {
    
    handleUserProps () {
        if (this.props.userProps.loading) {
            return <div>Loading ... </div>
        } else {
        return <div>{this.props.userProps.user.email}</div>
        }
    }
    
    render() {
        console.log(this.props.userProps.user)
        return (
            <div>
                {this.handleUserProps()}
            </div>
        )
    }
}


