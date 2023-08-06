import { useState } from "react";
// eslint-disable-next-line react/prop-types

export default function Authenticate({token}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);
    async function handleClick() {
        console.log('clicked');
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET", 
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
        });
        const result = await response.json();
        setSuccessMessage(result.message);
        setUsername(result.data.username);
           // 
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
    <h2>Authenticate!</h2>
    {successMessage && <p>{successMessage} {username}</p>}
    {error && <p>{error}</p>}
    <button onClick={handleClick}>Authenticate Token</button>
    </>
    )
    
}