import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import Search from "./search";

const Login = ()=>{
  const [login,setlogin]=useState("login")
  useEffect(()=>{
    console.log("useeffct called");
  },[])

  return <div>
    <button className="btn-login" onClick={()=>{
        login=="login" ? setlogin("logout") : setlogin("login")
    }
    }>
      {login}
    </button>
  </div>
}

export const Header = () => {

    return (
      <div className="header">
        <div className="logo">
          <img
            className="logoimage"
            src= {LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
        <Login/>
      </div>
    );
  };