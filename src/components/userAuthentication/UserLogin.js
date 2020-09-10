import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleOnchange = this.handleOnchange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
    }
    handleOnchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    render() {
        return (
            <div className='login'>
                <form className='form' onSubmit={this.handleSubmit}> 
                    <input type='email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleOnchange} required/>
                    <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleOnchange} required/>

                    <input className='button-form' type='submit' value='Sing in'/>
                </form>
            </div>
        )
    }
}