import {Rescard} from "./resCard"
import { resList } from "../utils/mockData";
import {useState} from "react";

const body = {
    display: "flex",
    flexWrap: "wrap",
  };



const Body = () => {
  const [resListData,setresListData]=useState(resList)

    return <div className="body" style={body}>

      <button type="button" onClick={()=>{
        let filteredlist=resListData.filter((res)=>res.info.avgRating>=4.5)
        setresListData(filteredlist)
      }}>top rated restaurants</button>
      {resListData.map((restaurant)=>(
        <Rescard key={restaurant.info.id} resdata={restaurant}/>
      ))}
    </div>;
  };

export default Body;