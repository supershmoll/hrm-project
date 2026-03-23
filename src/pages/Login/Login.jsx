import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    
    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        
        try{
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username,
                    password: password,
                    expiersInMins: 60,
                })    
            });

            const data = await response.json();

            if(response.ok){
                console.log("Login successfull! Here is the user data: ", data);

                localStorage.setItem("hrm_token", data.token)

                const myToken = localStorage.getItem("hrm_token");
                // TODO: Here is where you will eventually save the token to Redux/LocalStorage!

                navigate("/courses")
            }
            else{
                console.log("Login failed:", data.message);
                // TODO: Set your React error state so the user sees "Invalid credentials"
            }
        } catch (error)
            {
                console.error("Network error. Is your Internet down?", error)
                // TODO: Set an error state saying "Could not connect to server"
            }


    
    }
    return (
        <form onSubmit={handleLoginSubmit}>
            <input 
            type ="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="username"
            />
            <input 
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="password"
            />
            
            <button type="submit">Login</button>
            
        </form>
    );
}
export default Login