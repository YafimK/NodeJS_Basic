import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

class Login extends React.Component {
    render(){
        return <h1>Login</h1>;
    }

}

render(<Login/>, document.getElementById('login'));

