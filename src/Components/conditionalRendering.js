import React from "react";
import Lifecycle from "./lifeCycle";
export default class CondotionalRendering extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          show: false,
          startDate: null,
        }
    }
    
    handleClick = (e) => {
        this.setState({
          show: !this.state.show
        })
    }
    
    render() {
        return (
            <div>
                {this.state.show === true &&
                    <Lifecycle
                    setStartDate={new Date()}
                    />
                }
                <button onClick={this.handleClick}> Click here!</button>
            </div>
        )
    }
}