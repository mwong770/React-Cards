import React, { Component } from 'react';
import axios from 'axios';

class Form extends React.Component {
    state = { userName: '' }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                console.log(resp);
                this.props.onSubmit(resp.data);
                this.setState({ userName: '' });
            });
    };
    render() {
        return (
            <form style={{ margin: '0 auto', width: '290px' }} onSubmit={this.handleSubmit}>
                <input style={{ fontSize: '19px' }} type="text"
                    value={this.state.userName}
                    onChange={(event) => this.setState({ userName: event.target.value })}
                    placeholder="Github username" required />
                <button style={{ fontSize: '19px' }}type="submit">Add card</button>
            </form>
        );
    }
}

export default Form;