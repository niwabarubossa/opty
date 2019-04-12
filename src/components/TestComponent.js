import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

class TestComponent extends Component {
    render(){
        const id = 123;

        return(
            <div>
                I am a TestComponent Page
                <Link to={`/${id}`}>
                aaaaa
                </Link>
            </div>
        )
    }
}

export default TestComponent;
