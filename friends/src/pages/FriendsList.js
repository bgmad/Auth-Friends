import React from 'react';
import axios from 'axios';

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

    render() {
        return (
            <div>
                {this.state.data ? (
                    this.state.data.map(friend => {
                        return (
                        <div className='friend' id={friend.id} key={friend.id}>
                            <p>{friend.name} <br/> 
                                {friend.email} <br/>
                                {friend.age}</p>
                        </div>
                        )
                    })
                ) : (
                    <p>loading...</p>
                )}
            </div>
        )
    }
}