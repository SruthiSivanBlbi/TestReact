import { useEffect, useState } from "react";
import { Button, Avatar, List, ListItem, ListItemAvatar, ListItemText, IconButton, Icon, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";

export default function Functional() {
    const url = "https://reqres.in/api/users?page=2";

    const [users, setUsers] = useState([]);
    const [userFound, setUserFound] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const getUsers = async () => {
        const res = await fetch(url);
        res
            .json()
            .then(res => setUsers(res.data))
    }

    const handlePush = () => {
        var allUsers = users;
        allUsers = [
            ...allUsers,
            {
                first_name: "Sruthi",
                last_name: "Sivan",
                email: "sruthi@gmail.com"
            },
        ];

        setUsers(allUsers);
    }

    const showUsers = (user, index) => {
        return (
            <ListItem
                secondaryAction={
                    <IconButton onClick={(e) => deleteUser(user.email)} edge="end" aria-label="delete">
                        <Icon>
                            delete_forever
                        </Icon>
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar src={user.avatar} />
                </ListItemAvatar>
                <ListItemText
                    primary={user.first_name + " " + user.last_name}
                    secondary={user.email}
                />
            </ListItem>
        )
    }

    const deleteUser = (email) => {
        var allUsers = users.filter(user => user.email !== email);
        setUsers(allUsers);
    }
    const searchUsers = (input) => {
        setShowMessage(input.trim() !== "");
        setUserFound(users.some((user) => {
            return (user.first_name.search(input) >= 0 ||
                user.last_name.search(input) >= 0)
        }))
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Box
            sx={{
                width: 500,
                marginLeft: 50,
                border: 1
            }}
        >
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Item>
                        <h3 style={{ textAlign: "center" }}>Users List</h3>
                    </Item>
                </Grid>
            </Grid>

            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Item style={{ textAlign: 'center' }}>
                        <TextField
                            required
                            id="search"
                            type="text"
                            variant="outlined"
                            label="Search by Name"
                            onChange={(e) => { searchUsers(e.target.value) }}
                        />

                        <Button variant="contained" style={{ margin: 10 }} onClick={ getUsers }>Refresh</Button>
                        <Button variant="contained" onClick={ handlePush }>Push</Button>
                        { showMessage &&
                            <p>Match {userFound ? "" : "not"} found</p>
                        }
                    </Item>
                </Grid>
            </Grid>

            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Item>
                        <List>
                            { users.map(showUsers) }
                        </List>
                    </Item>
                </Grid>
            </Grid>
        </Box >
    )
}