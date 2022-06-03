import React from "react";
import { Button, InputLabel, TextField } from "@mui/material";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isLoginSuccess: true,
            message: ""
        }
    }

    Login = () => {
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then((res) => res.json())
            .then((resJson) => {
                resJson.token ?
                    this.setState({
                        message: "Login is successful - " + resJson.token,
                        isLoginSuccess: true,
                    })
                    : this.setState({
                        message: resJson.error,
                        isLoginSuccess: false,
                    });
            });
    }
    inpEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    inpPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div style={{ marginTop: 20, padding: 10 }}>
                <h3>Assignment 3: Part 2: Login </h3><br/>
                <InputLabel sx={{color: "black"}}>Email ID: </InputLabel>
                <TextField  sx={{ marginLeft: 10, marginTop: -4}} variant="outlined" label="Enter Email" onChange={this.inpEmail}></TextField><br />
                <br/><br/>
                <InputLabel sx={{color: "black"}}>Password: </InputLabel>
                <TextField  sx={{ marginLeft: 10, marginTop: -4}} variant="outlined" label="Enter Password" type="password" onChange={this.inpPassword}></TextField><br /><br/>
                <Button variant="contained" onClick={this.Login}>Login</Button><br /><br />
                {this.state.isLoginSuccess === true ?
                    <InputLabel sx={{ color: "green", textAlign: "center", marginTop: -30 }}>{this.state.message}</InputLabel>
                    : <InputLabel sx={{ color: "red", textAlign: "center", marginTop: -30 }}>{this.state.message} </InputLabel>
                }
            </div>
        )
    }
}