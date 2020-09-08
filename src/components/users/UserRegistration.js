import React, { Component } from 'react';

export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            password_confirmation: '',
            name: ''
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
            <div className='registration'>
                <form className='form' onSubmit={this.handleSubmit}> 
                    <input type='email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleOnchange} required/>
                    <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleOnchange} required/>
                    <input type='password' name='password_confirmation' placeholder='Password confirmation' value={this.state.password_confirmation} onChange={this.handleOnchange} required/>
                    <input type='text' name='name' placeholder='Full Name' value={this.state.name} onChange={this.handleOnchange} required/>

                    <input className='button-form' type='submit' value='Sign up'/>
                </form>
            </div>
        )
    }
}