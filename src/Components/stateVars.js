import React from "react";

export default class StateVars extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bg: "",
        }
    }
    handleInput1 = (e) => {
        this.setState({
            bg: e.target.value
        });
    }
    handleInput2 = (e) => {
        this.setState({
            bg2: e.target.value
        });
    }
    handleClick = () =>{
        this.setState({
            bg: this.state.bg2
        })
    }

    render(){
        return(
            <div style={{ backgroundColor: this.state.bg, width: 500, height: 150 }}>
                <h2>Hello from state vars component</h2>
                <input id="id1" type="text" onChange={this.handleInput1}/>
                <br /><br/>
                <input id="id2" type="text" onChange={this.handleInput2}/>
                <button onClick={this.handleClick}>Click here!</button>
            </div>
        )
    }
}