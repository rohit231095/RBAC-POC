import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/components/SideNav.scss";

const SideNav = ({ firstName, lastName, role, accessDenied, logout }) => {
    let pageOn = sessionStorage.getItem("pageOn");
    return (
        <div className="side-nav">
            <div>{`Welcome, ${firstName} ${lastName}`}</div>
            <div>
                <Link to="/">Users List</Link>
            </div>
            <div onClick={role === "guest" && accessDenied}>
                <Link to={`${role !== "guest" ? "/add-user" : ""}`}>Add User</Link>
            </div>
            <div onClick={role !== "admin" && accessDenied}>
                <Link to={`${role === "admin" ? "/modify-user" : ""}`}>Modify User</Link>
            </div>
            <div onClick={logout}>Logout</div>
        </div>
    );
}

export default SideNav;