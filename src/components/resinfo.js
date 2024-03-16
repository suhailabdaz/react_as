import {  useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer"
import useMenuData from "../utils/useMenuData";

const Resinfo=()=>{
let params = useParams();
let { resid } = params;

let menuData=useMenuData(resid)


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