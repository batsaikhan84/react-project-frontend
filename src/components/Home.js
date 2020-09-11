import React, { Component } from 'react';

class Home extends Component {
    user() {
        return this.props.userProps.user.map(user => <h1>{user.email}</h1>)
    }
    render() {
        return (
            <div className='home'>
                {this.props.userProps.logged_in ? <div><h1>Welcome {this.user()}</h1></div> :
                <div>                
                    <h1>REACT-READUX PROJECT</h1>
                    <p>please sign in or sign up</p>
                    <button className='registerButton' onClick={() => this.props.history.push('/registration')}>Sign up</button>
                </div>
                }

            </div>
        )
    }
}

export default Home
