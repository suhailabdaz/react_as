import {IMAGE_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import { useEffect } from "react";



export const Rescard = (props) => {
      const {resdata} = props;
      console.log("props",props);
    const {id,name,areaName,cuisines,avgRating,cloudinaryImageId}=resdata?.info
    const {deliveryTime}=resdata?.info.sla
    return (
      <div data-testid="resCard" className="w-80  mx-7 my-3 border-solid border-2 rounded-lg text-center hover:bg-slate-300 hover:scale-95 hover:ease-in-out duration-500">
      <Link to={"/resinfo/" + id}>
        <img
          className="resimage"
          src={
            IMAGE_URL+
            cloudinaryImageId
          }
        />
      <h2 className="text-xl mt-3">{name}</h2>
        <h3>
          <span className="rating">{avgRating}</span> &nbsp;
          {deliveryTime}&nbsp; Minutes
        </h3>
        <h3 className="truncate mx-2">{cuisines.join(",")}</h3>
        <h3 className="mb-3">{areaName}</h3>
        </Link>
      </div>
    );
  };

  export const Promoted=(Rescard)=>{
    return(props)=>{
        return (
          <div>
          <label className="absolute z-20 m-2 p-2 rounded-md text-white bg-green-700">OPEN</label>
          <Rescard key={props.index} resdata={props.resdata}/>
          </div>
        )
    }
  }