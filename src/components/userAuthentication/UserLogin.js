import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserLogin } from '../../actions/userActions'


class Login extends Component {
        state = {
            email: '',
            password: ''
        }
    handleSubmit(event) {
        event.preventDefault()
        this.props.fetchUserLogin(this.state)
        this.setState({
            email: '',
            password: ''
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
            <div className='login'>
                <form className='form' onSubmit={(event) => this.handleSubmit(event)}> 
                    <input type='email' name='email' placeholder='Email' value={this.state.email} onChange={(event) => this.handleOnchange(event)} required/>
                    <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={(event) => this.handleOnchange(event)} required/>

                    <input className='button-form' type='submit' value='Sing in'/>
                </form>
            </div>
        )
    }
}

export default connect(null, { fetchUserLogin })(Login)