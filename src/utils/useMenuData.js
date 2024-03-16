import { useState,useEffect } from "react";
import { menu } from "./constants";



const useMenuData=(resid)=>{

const [menuDataList,setmenuDataList]=useState(null)
useEffect(()=>{
    fetchdata()},[]
)

const fetchdata=async()=>{
    const data = await fetch(menu+resid);
    const json= await data.json()
    setmenuDataList(json.data)
}
return menuDataList

}

export default useMenuData