import React from "react";

const User = () => {
    const myStyle = {
        color:"white",
        backgroundColor:"DodgerBlue",
        padding:"10px",
        fontFamily:"Sans-Seriff"
    };
    const btnStyle = {
        backgroundColor:"#4CAF50",/*Green*/
        border:"1px solid black",
        padding:"16px 32px",
        textAlign:"center",
        textDecoration:"none",
        display:"inline-block",
        fontSize:"16px",
        margin:"4px 2px",
        cursor:"pointer"
    };
    const shoot = () => {
        alert("Welcome User!");
    };
    return(
        <div>
            <h1 style={myStyle}>Hello World!</h1>
            <button style={btnStyle} onClick={shoot}>Click me!</button>
        </div>
    )
}

export default User;