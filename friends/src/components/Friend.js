import React from 'react';

export default class Friend extends React.Component {

    handleClick = e => {
        e.preventDefault();
        this.props.handleRemove(this.props.friend.id);
    }

    render() {
        return (
            <div 
                className='friend' 
                id={this.props.friend.id} 
                key={this.props.friend.id}
            >
                <p> {this.props.friend.name} <br/> 
                    {this.props.friend.email} <br/>
                    {this.props.friend.age} </p>
                <button onClick={this.handleClick}>Remove Friend</button>
            </div>
        )
    }
}