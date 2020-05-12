import React, { Component } from 'react';
import './Test.css';

class Test extends Component {
    render() {
        return (
        <div className='f1 tc'>
            <h1>Hello World</h1>
            <h2>{this.props.greeting}</h2>
        </div>
        )
    }
}

export default Test;