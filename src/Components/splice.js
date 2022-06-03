import React from "react";
import { Button, Avatar, List, ListItem, ListItemAvatar, ListItemText, IconButton, Icon } from "@mui/material";

export default class Slice extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        this.getUsers();
    }
    getUsers = () => {
        fetch("https://reqres.in/api/users?page=2")
        .then((res) => res.json())
        .then((resJson) => {
            this.setState({
                users: resJson.data
            })
        })
    }
    handlePush = () =>{
        var u = this.state.users;
        u.push({
            first_name: "Sruthi",
            last_name: "Sivan",
            email: "sruthi@gmail.com"
        });
        this.setState({
            users: u
        })
    }
    showUsers = (user, index) =>{
        return(
            <ListItem
                secondaryAction={
                    <IconButton onClick={(e) => this.splice(index)} edge="end" aria-label="delete">
                        <Icon>
                            delete_forever
                        </Icon>
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar src={user.avatar}/>
                </ListItemAvatar>
                <ListItemText 
                    primary={user.first_name + " " + user.last_name}
                    secondary={user.email}
                />
            </ListItem>
        )
    }
    splice = (index) => {
        var u = this.state.users;
        u.splice(index, 1);
        this.setState({
            users: u
        }) 
    } 
    render() {
        return(
            <div>
                <h3>Assignment 3: Part 1: Users List</h3>
                <Button variant="contained" style={{ margin: 10 }} onClick={this.getUsers}>Refresh</Button>
                <Button variant="contained" onClick={this.handlePush}>Push</Button>
                <List>
                {this.state.users.map(this.showUsers)}
                </List>
            </div>
        )
    }
}