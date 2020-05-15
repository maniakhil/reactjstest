import React, { Component } from 'react';

class Looker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            finished: false
        }
    }

    render() {
        return (
            <div>
                <p>Looker Dashboard</p>
                <div className="looker-container">
                    <iframe title="Looker"
                        src="https://rcg1-looker.therigy.com/embed/dashboards/1"
                        width="800"
                        height="400"
                        frameborder="0">
                    </iframe>
                </div>

                <p>Looker View/Look</p>
                <div className="looker-container">
                    <iframe title="Looker"
                        src="https://rcg1-looker.therigy.com/embed/looks/2"
                        width="800"
                        height="400"
                        frameborder="0">
                    </iframe>
                </div>
            </div>
        )
    }
}

export default Looker
