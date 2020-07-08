import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import SideNav from "../components/SideNav";
import Toast from "../components/Toast";
import AddUser from "../screens/AddUser";
import ModifyUser from "../screens/ModifyUser";
import "../scss/Routes.scss";

const Routes = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [toast, setToast] = useState({ message: "", type: "", visible: false });
    let user = sessionStorage.getItem("user");

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            setLoggedIn(true);
        }
    }, [user]);

    const accessDenied = () => {
        setToast({ message: "Access Denied", type: "error", visible: true });
        setTimeout(() => {
            setToast({ message: "", type: "", visible: false });
        }, 3000);
    }

    const logout = () => {
        sessionStorage.setItem("user", "");
        window.location.href = "../";
    }

    return (
        <Router>
            <div className="routes">
                {loggedIn ? <SideNav firstName={JSON.parse(user).firstName || JSON.parse(user).username} lastName={JSON.parse(user).lastName || ""} role={JSON.parse(user).role} accessDenied={accessDenied} logout={logout} /> : ""}

                <Switch>
                    <Route path="/">
                        {loggedIn ? <Home /> : <Login />}
                    </Route>
                    <Route path="/add-user">
                        <AddUser />
                    </Route>
                    <Route path="/modify-user">
                        <ModifyUser />
                    </Route>
                </Switch>
                <Toast message={toast.message} type={toast.type} visible={toast.visible} />
            </div>
        </Router>
    );
}

export default Routes;