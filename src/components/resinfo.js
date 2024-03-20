import {  useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useMenuData from "../utils/useMenuData";
import {RestaurantCategory} from "./restaurantCategory";

const Resinfo=()=>{
let params = useParams();
let { resid } = params;
let menuData=useMenuData(resid)


if (!menuData) return <Shimmer/>
const {name,cuisines}=menuData.cards[0].card.card.info
const {itemCards}=menuData.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card

const categories=menuData.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="text-center mb-20">
            <h1 className="my-2 text-3xl font-bold">{name}</h1>
            <h2 className="my-2 text-2xl">{cuisines.join(",")}</h2>
            {
                categories.map((category,index)=>(
                    <RestaurantCategory key={index} data={category?.card?.card}/>
                ))
            }
        </div>
    )
}


export default Resinfo