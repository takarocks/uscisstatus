import React from "react";
import '../App.css';
 
function Navbar({signOut, user}) {

    return (
        <div>
        <div className="topnav">
            <div>{user.username}</div>
            <div className="topnav-centered"><h1>My USCIS Status</h1></div>
            <div className="topnav-right"><button onClick={signOut}>Sign out</button></div>
        </div>
        <div className="mainnav">
            <div>{user.attributes.email}</div>
        </div>
        </div>
    );
}
export default Navbar;