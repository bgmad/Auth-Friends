import React from 'react';
import axios from 'axios';

import Friend from '../components/Friend';
import FriendForm from '../components/FriendForm';


export default class FriendsList extends React.Component {

    state = {
        isLoading: false,
        data: null
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            isLoading: true
        })
        axios
            .get('http://localhost:5000/api/friends', {
                headers: {
                    authorization: localStorage.getItem('token') 
                }
            })
            .then(res => {
                this.setState({
                    ...this.state,
                    isLoading: false,
                    data: res.data
                })
            })
            .catch(err => console.log(err));
    }

    handleRemove = id => {
        axios
            .delete(`http://localhost:5000/api/friends/${id}`, {
                headers: {
                    authorization: localStorage.getItem('token')
                } 
            })
            .then(res => this.setState({
                ...this.state,
                data: res.data
            }))
            .catch(err => console.log(err))
    }

    updateState = data => {
        this.setState({
            ...this.state,
            data: data
        })
    }

    render() {
        return (
            <div>
                <h3>My Friends</h3>
                {this.state.data ? (
                    this.state.data.map(friend => <Friend friend={friend} handleRemove={this.handleRemove}/>)
                ) : (
                    <p>loading...</p>
                )}
                <h3>Add a Friend</h3>
                <FriendForm updateState={this.updateState}/>
            </div>
        )
    }
}