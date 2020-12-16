import React from 'react';
import { Link } from 'react-router-dom';

import FriendForm from '../components/FriendForm';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Link to='/home/friends'>Friends List</Link>
                <FriendForm/>
            </div>
        )
    }
}