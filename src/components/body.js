import { Rescard } from "./resCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import axios from "axios";

const body = {
  display: "flex",
  flexWrap: "wrap",
};

const Body = () => {
  const [resListData, setresListData] = useState([]);
  const [filtereddatas,setfiltereddata]= useState([]);
  const [loading, setLoading] = useState(false)
  const Search = () => {
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
      setLoading(true)
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&pagetype=DESKTOP_WEB_LISTING"
    // );

    // const json = await data.json();
    const json = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&pagetype=DESKTOP_WEB_LISTING")
    // const newlist =
    //   json.data.data.cards[2].card.card.gridElements?.infoWithStyle.restaurants;
    const newlist = await json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    setresListData(newlist);
    setfiltereddata(newlist);
    setLoading(false)
    }
    catch(err){
      console.log(err);
    }
  };
  if(loading){
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
            (res) => res.info.avgRating > 4.0
          );
          setfiltereddata(filteredlist);
        }}
      >
        top rated restaurants
      </button>
      </div>
    <div className="body" style={body}>
      
      {
        filtereddatas.map((restaurant, i) => (
          <Rescard key={i} resdata={restaurant} />
        ))}
    </div>
    </div>
  );
}; 

export default Body;
