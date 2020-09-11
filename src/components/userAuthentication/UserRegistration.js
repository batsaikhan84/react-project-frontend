import React, { Component } from 'react';
import { fetchUserRegistration } from '../../actions/userActions'
import { connect } from 'react-redux'

class Registration extends Component {
        state = {
            email: '',
            password: '',
            password_confirmation: '',
            name: ''
        }
    handleSubmit(event) {
        event.preventDefault()
        this.props.fetchUserRegistration(this.state)
        this.setState({
            email: '',
            password: '',
            password_confirmation: '',
            name: ''
        })
        this.props.history.push('/profile')
    }
    handleOnchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div className='registration'>
                <form className='form' onSubmit={(event) => this.handleSubmit(event)}> 
                    <input type='email' name='email' placeholder='Email' value={this.state.email} onChange={(event) => this.handleOnchange(event)} required/>
                    <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={(event) => this.handleOnchange(event)} required/>
                    <input type='password' name='password_confirmation' placeholder='Password confirmation' value={this.state.password_confirmation} onChange={(event) => this.handleOnchange(event)} required/>
                    <input type='text' name='name' placeholder='Full Name' value={this.state.name} onChange={(event) => this.handleOnchange(event)} required/>

                    <input className='button-form' type='submit' value='Sign up'/>
                </form>
            </div>
        )
    }
}

export default connect(null, { fetchUserRegistration })(Registration)

