import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus";

const Login = ()=>{
  const [login,setlogin]=useState("login")
  return <div className="align-text-bottom">
    <button className=" text-4xl  bg-green-600 h-14 px-14 m-20 mr-5 rounded-lg text-cyan-50" onClick={()=>{
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
      <div className="flex justify-between">
        <div className="w-64 m-7 ">
          <img
            className="logoimage"
            src= {LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="mt-8" >
          <ul className="flex align-bottom">
          <li className="m-5 mt-16 px-5 text-4xl text-green-600">
            {onlinestatus ? "online" :"offline"}
          </li>
          <li className="m-5 mt-16 px-5 text-4xl"><Link to="/">Home</Link></li>           
            <li className="m-5 px-5 mt-16 text-4xl"><Link to="/about">About</Link></li>
            <li className="m-5 px-5 mt-16 text-4xl"><Link to="/Contact">Contact</Link></li> 
            <li className="m-5 px-5 mt-16 text-4xl"><Link to="/">Cart</Link></li>                                       
          </ul>
        </div>
        <Login/>
      </div>
    );
  };