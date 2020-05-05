import React, { Component } from 'react';
import loginService from './loginService';

import './loginStyle.scss';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isError: false
        }

        this.loginService = new loginService();
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="login-page">
                <div className="form-box">
                    <h1>App Login</h1><br />
                    <form>
                        <input type="text" className="username" value={this.state.username}
                            onChange={(evt) => this.handleChange("username", evt)} placeholder="Username" /><br /><br />
                        <input type="password" className="password" value={this.state.password}
                            onChange={(evt) => this.handleChange("password", evt)} placeholder="Password" /><br /><br />
                        <span className="error">{(this.state.isError ? 'Invalid username or password' : null)}</span><br /><br />
                        <button className="submitBtn" onClick={this.login}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }

    componentDidMount() {
        if (localStorage.getItem('logData')) {
            this.props.history.push("dashboard");
        }
    }

    login(evt) {
        let checkValue = this.state.username + this.state.password;
        evt.preventDefault();
        let params = { username: this.state.username, password: this.state.password }
        this.loginService.checkCredentials(params).then(response => {
            if (response.status === "success" && checkValue === response.data.key) {
                localStorage.setItem('logData', JSON.stringify(response.data))
                this.setState({
                    isError: false,
                });
                this.props.history.push("dashboard");
            } else {
                this.setState({
                    isError: true,
                });
            }
        });
    }

    handleChange(source, event) {
        if (source === "username") {
            this.setState({ username: event.target.value });
        } else {
            this.setState({ password: event.target.value });
        }
    }
}

export default Login