import React, { Component } from 'react';

import DashboardService from './dashboardService';

import './dashboardStyle.scss'

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            finished: false
        }

        this.dashboardService = new DashboardService();
        this.sessionLogout = this.sessionLogout.bind(this);
    }

    render() {
        return (
            <div className="App-header">
                <button className="logout-btn" onClick={this.sessionLogout}>Logout</button>

                <p>React 16.13.1 Test Application by Mani</p>

                <div className="row">
                    <div className="col-6">
                        <h5><u>Todos</u></h5>

                        <table border="1">
                            <thead>
                                <tr><th>Sl No</th><th>Todo</th></tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.todoList.map((todoData) =>
                                        <tr key={todoData.slno}>
                                            <td> {todoData.slno}</td>
                                            <td> {todoData.todo}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-6">
                        <h5><u>Live Data</u></h5>
                    </div>
                </div>
            </div>)
    }

    componentDidMount() {
        if (!localStorage.getItem('logData')) {
            this.props.history.push("login");
        }

        this.dashboardService.getTodos().then(response => {
            if (response.status === "success") {
                this.setState({
                    todoList: response.data,
                    finished: true
                });
            } else {
                console.log("Todo Empty");
            }
        });
    }

    sessionLogout() {
        localStorage.clear();
        this.props.history.push("login");
    }
}