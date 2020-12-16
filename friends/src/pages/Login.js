import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    
    state = {
        error: '',
        isLoading: false,
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            isLoading: true
        })

        axios
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.setState({
                    isLoading: false,
                    credentials: {
                        username: '',
                        password: ''
                    }
                });
                window.location.href = '/home';
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    isLoading: false,
                    credentials: {
                        username: '',
                        password: ''
                    }
                });
                window.location.href = '/login'
            });
    }

    render() {
        return (
            <div>
                {!this.state.isLoading ? 
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input 
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        type='text' 
                        name='username'
                    />
                    <label>Password: </label>
                    <input 
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        type='password' 
                        name='password'
                    />
                    <button>Login</button>
                </form> 
                :
                <p>loading...</p>}
            </div>
        )
    }
}