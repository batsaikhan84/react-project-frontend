import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <ul className='navbar-links'>
                    <Link className='li-links' to='/'><li>HOME</li></Link>
                    <Link className='li-links' to='/dashboard'><li>DASHBOARD</li></Link>
                    <Link className='li-links' to='/about'><li>ABOUT</li></Link>
                </ul>
            </nav>
        )
    }  
}

