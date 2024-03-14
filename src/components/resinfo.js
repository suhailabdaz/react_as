import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer"

const Resinfo=()=>{


const [menuData,setmenuData]=useState(null)
let params = useParams();
let { resid } = params;
useEffect(()=>{
    fetchdata()},[]
)

const fetchdata=async()=>{

    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resid}`);
    const json= await data.json()
     console.log("json",json);
    setmenuData(json.data)
}

if (!menuData) return <Shimmer/>
const {name,cuisines}=menuData.cards[2].card.card.info
const {itemCards}=menuData.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
console.log("items",itemCards)

    return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <ul>
            {itemCards.map((item, index) => (
                <li key={index}>{item.card.info.name}</li>
            ))}
        </ul>
        </div>
    )
}


export default Resinfo