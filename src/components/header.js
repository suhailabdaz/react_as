import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus";

const Login = ()=>{
  const [login,setlogin]=useState("login")
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

  let onlinestatus=useOnlineStatus()



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
          <li>
            onlinestatus:{onlinestatus ? "online" :"offline"}
          </li>
          <li><Link to="/">Home</Link></li>           
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li> 
            <li><Link to="/">Cart</Link></li>                                       
          </ul>
        </div>
        <Login/>
      </div>
    );
  };