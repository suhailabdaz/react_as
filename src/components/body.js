import { Rescard ,Promoted} from "./resCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import axios from "axios";
import { resListApi } from "../utils/constants";



const Body = () => {
  const [resListData, setresListData] = useState([]);
  const [filtereddatas,setfiltereddata]= useState([]);
  const [loading, setLoading] = useState(false);
  const PromotedCard=Promoted(Rescard)
   
  let onlinestatus=useOnlineStatus()
  
  const Search = () => {
    const [searchdata,setsearchdata]=useState([]);
    return (
    <div className="items-center content-center" >
      <input type="text" className=" p-3 my-6 h-12 w-96 border-solid border-2" placeholder="Search" value={searchdata} onChange={(e)=>{
        setsearchdata(e.target.value)
      }}></input>
      <button type="button" className=" w-40 h-11 border-solid bg-slate-500" onClick={()=>
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
    <div className="flex items-center justify-center">
    <Search/>
    <button className="bg-gray-800 text-center text-slate-50 w-60 h-11"
        type="button"
        onClick={() => {
          let filteredlist = resListData.filter(
            (res) => res.info.avgRating > 4.5
          );
          setfiltereddata(filteredlist);
        }}
      >
        top rated restaurants
      </button>
      </div>
    <div className="flex flex-wrap">
      
      {
        filtereddatas.map((restaurant, i) => (
          
            restaurant.info.isOpen ?
            (
              <PromotedCard key={i} index={i} resdata={restaurant} />

            ):(
              <Rescard key={i} resdata={restaurant} />
            )
        ))}
    </div>
    </div>
  );
}; 

export default Body;
