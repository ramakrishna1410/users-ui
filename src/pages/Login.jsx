import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {

        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "https://localhost:7268/api/auth/login",
                loginData
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            alert("Login Successful");

            navigate("/users");

        }
        catch {

            alert("Invalid Username or Password");

        }

    };

    return (
        <div>

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;