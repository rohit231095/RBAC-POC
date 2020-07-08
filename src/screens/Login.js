import React, { useState } from "react";
import LabelInput from "../components/LabelInput";
import "../scss/screens/Login.scss";
import Button from "../components/Button";
import Services from "../services";
import Toast from "../components/Toast";
const { Auth } = Services;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [toast, setToast] = useState({ message: "", type: "", visible: false });

    const submit = () => {
        if (!username || !password) {
            setToast({ message: "All fields required!", type: "warn", visible: true });
            setTimeout(() => {
                setToast({ message: "", type: "", visible: false });
            }, 3000);
        } else {
            Auth.login({ username, password }, responseCheck);
        }
    }

    const responseCheck = res => {
        const { error } = res.data;
        if (error && error !== "false") {
            const { message } = res.data;
            setToast({ message, type: "error", visible: true });
            setTimeout(() => {
                setToast({ message: "", type: "", visible: false });
            }, 3000);
        } else {
            const { user } = res.data;
            setToast({ message: "Login Success", type: "success", visible: true });
            setTimeout(() => {
                sessionStorage.setItem("user", JSON.stringify(user));
                window.location.reload();
            }, 3000);
        }
    }

    return (
        <div className="login">
            <div className="login-form">
                <LabelInput label="Username" type="text" value={username} handleChange={e => setUsername(e.target.value)} />
                <LabelInput label="Password" type="password" value={password} handleChange={e => setPassword(e.target.value)} />
                <Button label="Login" handleClick={submit} />
            </div>
            <Toast message={toast.message} type={toast.type} visible={toast.visible} />
        </div>
    );
}

export default Login;