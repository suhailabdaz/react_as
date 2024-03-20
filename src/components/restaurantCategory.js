import CategoryItems from "./categoryItems"
import { IMAGE_URL } from "../utils/constants"
import { useState } from "react"

export const RestaurantCategory=(props)=>{
    const {title,itemCards}=props.data
    const [show,setshow]=useState(false)
    
    const handleClick=()=>{
        setshow(!show)
    }
    return(
        <div>
            <div className="bg-slate-100 shadow-md w-6/12 mx-auto my-4 p-3 transition ease-in-out duration-1000 " >
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold" >{title} <span>({itemCards.length})</span></span>
                <span className="font-semibold ">show</span>
            </div>
            { show && <CategoryItems items={itemCards}/>}
            </div>
        </div>
    )
}

