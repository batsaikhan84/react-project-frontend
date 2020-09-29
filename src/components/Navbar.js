import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserLogout } from '../actions/userActions'


class Navbar extends Component {
    handleLogoutClick(event) {
        event.preventDefault()
        this.props.fetchUserLogout()
        this.props.history.push('/')
    }
    render() {
        return (
            <nav className='navbar'>
                <ul className='navbar-links'>
                    <Link className='li-links' to='/'><li>HOME</li></Link>
                    <Link className='li-links' to='/profile'><li>PROFILE</li></Link>
                </ul>
        <div>{this.props.userData.logged_in ? <button className='logoutButton' onClick={(event) => this.handleLogoutClick(event)}>Logout</button> : <button className='loginButton' onClick={() => this.props.history.push('/login')}>Sign in</button>}</div>
                
                
            </nav>
        )
    }  
}

export default connect(null, { fetchUserLogout })(withRouter(Navbar))

