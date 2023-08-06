import './App.css'
import Authenticate from './components/Authenitcate';
import SignUpForm from './components/SignUpForm';
import { useState } from "react";

export default function App(){
  const [token, setToken] = useState(null);
  
  return (
        <>
        <Authenticate token={token} setToken={setToken} />
        <SignUpForm token={token} setToken={setToken} />
        </>
    );
}

