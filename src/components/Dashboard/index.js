import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateMovies from './../../stores/user_store/actions/updateMovies';
import fetchUsers from './../../stores/user_store/actions/fetchUsers';

import DashboardService from './dashboardService';

import './dashboardStyle.scss'

class Dashboard extends Component {

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

                        <span>YOUR CURRENT MOVIE IS: {this.props.movies.name}</span><br /><br />
                        <button onClick={this.props.updateMovies}>SELECT NEW MOVIE</button><br /><br />

                        <button onClick={this.props.fetchUsers}>FETCH USERS</button>
                        <div>
                            {this.props.users.length === 0 ? <p>THERE ARE NO USERS</p> :
                                this.props.users.map(user => <p key={user.id}>{user.user_name} - {user.user_email}</p>)
                            }
                        </div>

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

const MapStateToProps = (state) => {
    return {
        movies: state.movies,
        users: state.users
    };
}

const MapDispatchToProps = (dispatch) => {
    return {
        updateMovies: () => dispatch(updateMovies),
        fetchUsers: () => dispatch(fetchUsers),
    }
};

export default connect(MapStateToProps, MapDispatchToProps)(Dashboard)