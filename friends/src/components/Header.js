import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    
    handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    render() {
        return ( 
            <ul>
                {localStorage.getItem('token') ? (
                <>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link onClick={this.handleLogout}>Logout</Link>
                    </li>
                </>
                ) : (
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                )}
            </ul>
        );
    }
}