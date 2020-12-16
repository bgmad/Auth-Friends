import React from 'react';
import axios from 'axios';

export default class FriendForm extends React.Component {

    state = {
        body:{
            name: '',
            email: '',
            age: '',
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            body:{
                ...this.state.body,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.body.name && 
            this.state.body.email && 
            this.state.body.age) {
            axios
                .post('http://localhost:5000/api/friends', this.state.body, {
                    headers: {
                        authorization: localStorage.getItem('token') 
                    }
                })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        } else { 
            return null;
        }
    }

    render() {
        console.log(this.state.body)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Full Name: </label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.body.name}
                        type='text' 
                        name='name'
                    />
                    <label>Email: </label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.body.email}
                        type='email' 
                        name='email'
                    />
                    <label>Age: </label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.body.age}
                        type='number' 
                        name='age'
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}