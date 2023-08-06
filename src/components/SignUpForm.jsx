import { useState } from "react";

export default function SignUpForm({ token, setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    

    async function handleSubmit(e) {
        console.log(e)
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
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    } 

    return (
    <>
    <h2>Sign Up!</h2>
    {(username.length < 8) && "Username must be at least 8 characters"}
    {""}
    <form onSubmit={handleSubmit}>
            <label>
                Username: <input onChange={(e) => setUsername(e.target.value)}
                />

            </label>
            <label>
                Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button>Submit</button>
        </form>
    </>
    )
}