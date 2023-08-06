import { useState } from "react";


export default function SignUpForm({ token, setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    function validateForm() {
        if (username.length < 8) {
            setError("Username must be 8 characters or more");
            return false;
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            setToken(data.token);
            if (!response.ok) {
                throw new Error(data.message);
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    } 

    return (
    <>
    <h2>Sign Up!</h2>
    
    <form onSubmit={handleSubmit}>
            <label>
                Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type="submit" onClick={()=> validateForm()}>Submit</button>
        </form>
    </>
    )
}