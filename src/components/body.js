import { Rescard } from "./resCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import axios from "axios";
import { resListApi } from "../utils/constants";


const Body = () => {
  const [resListData, setresListData] = useState([]);
  const [filtereddatas,setfiltereddata]= useState([]);
  const [loading, setLoading] = useState(false);
  let onlinestatus=useOnlineStatus()
  
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

    const json = await axios.get(resListApi)

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
  if(!onlinestatus){
    return(
    <div>
      <h1>Youre offline</h1>
    </div>
    )
  }
  return (
    <div>
    <div className="flex">
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
    <div className="body">
      
      {
        filtereddatas.map((restaurant, i) => (
          <Rescard key={i} resdata={restaurant} />
        ))}
    </div>
    </div>
  );
}; 

export default Body;
