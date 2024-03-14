import { Rescard } from "./resCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const body = {
  display: "flex",
  flexWrap: "wrap",
};

const Body = () => {
  const [resListData, setresListData] = useState([]);
  const [filtereddatas,setfiltereddata]= useState([])

  const Search = () => {
    console.log("rerendered");

    const [searchdata,setsearchdata]=useState([]);
    return (
    <div className="search">
      <input type="text" className="search-bar" placeholder="Search" value={searchdata} onChange={(e)=>{
        setsearchdata(e.target.value)
      }}></input>
      <button type="button" className="search-button" onClick={()=>
      {
        const filtereddata= resListData.filter((res)=>res.info.name.toLowerCase().includes(searchdata.toLowerCase()))
        setfiltereddata(filtereddata)
       
      }}>Search</button> 
          
    </div>)
};

  useEffect(() => {
    fetchdata();
  },[]);

  const fetchdata = async () => {
    try{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&pagetype=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const newlist =
      json?.data?.cards[2].card.card.gridElements?.infoWithStyle.restaurants;
    setresListData(newlist);
    setfiltereddata(newlist);
    }
    catch(err){
      console.log(err);
    }
  };

  


  if(resListData.length==0){
    return <Shimmer/>
  }

  return (
    <div>
    <div className="body-top">
    <Search/>
    <button className="sort-btn"
        type="button"
        onClick={() => {
          let filteredlist = resListData.filter(
            (res) => res.info.avgRating >= 4.5
          );
          setresListData(filteredlist);
        }}
      >
        top rated restaurants
      </button>
      </div>
    <div className="body" style={body}>
      
      {resListData &&
        filtereddatas.map((restaurant) => (
          <Rescard key={restaurant.info.id} resdata={restaurant} />
        ))}
    </div>
    </div>
  );
}; 

export default Body;
