import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import API_URL from "../constants";
import styles from "../styles/login.module.css";
function Login() {
    const navigate = useNavigate()

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const handleApi = () => {
        const url = API_URL + '/login';
        const data = { username, password };
        axios.post(url, data)
            .then((res) => {
                if (res.data.message) {
                    if (res.data.token) {
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('userId', res.data.userId);
                        navigate('/');
                    }
                }
            })
            .catch((err) => {
                alert('SERVER ERR')
            })
    }

    return (
        <div>
            <div className={styles.wrapper}>
                <h1> Welcome to Login Page </h1>
                <br></br>
                USERNAME
                <div className={styles.inputbox}>
                <input className="form-control" type="text" value={username}
                    onChange={(e) => {
                        setusername(e.target.value)
                    }} />
                </div>
                <br></br>
                PASSWORD
                <input className="form-control" type="text" value={password}
                    onChange={(e) => {
                        setpassword(e.target.value)
                    }} />
                <br></br>
                <button className="btn btn-primary mr-3" onClick={handleApi}> LOGIN </button>
                <Link className="m-3" to="/signup">  SIGNUP </Link>
            </div>
        </div>
    )
}

export default Login;