import React from "react";

export default class Lifecycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inpColor: "",
            div1Color: "red",
            div2Color: "yellow",
            div3Color: "green",
            endDate: null
        }
    }
    handleInput = (e) => {
        this.setState ({
            inpColor: e.target.value,
        })
    }
    div1Click = () =>{
        this.setState({
            div1Color: this.state.inpColor
        })
    }
    div2Click = () =>{
        this.setState({
            div2Color: this.state.inpColor
        })
    }
    div3Click = () =>{
        this.setState({
            div3Color: this.state.inpColor
        })
    }
    componentDidMount(){
        console.log("from component did mount");
    }
    componentDidUpdate() {
        console.log("from component did update");
    }
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td><div style={{backgroundColor: this.state.div1Color,width:300,height:150}} onClick={this.div1Click}></div></td>
                        <td><div style={{backgroundColor: this.state.div2Color,width:300,height:150}}  onClick={this.div2Click}></div></td>
                        <td><div style={{backgroundColor: this.state.div3Color,width:300,height:150}} onClick={this.div3Click}></div></td>
                    </tr>
                    <tr>
                        <input id="myid" type="text" placeholder="Enter Color" onChange={this.handleInput} />
                    </tr>
                </table>
            </div>
        )
    }
    componentWillUnmount(){
        var endaDate = new Date();
        var diff = (endaDate  - this.props.setStartDate)/1000;
        console.log("from component will unmount" + diff);
      }
}