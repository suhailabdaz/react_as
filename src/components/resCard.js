import {IMAGE_URL} from "../utils/constants"
import { Link } from "react-router-dom";



export const Rescard = (props) => {
    const {resdata} = props;
  
    const {id,name,areaName,cuisines,avgRating,cloudinaryImageId}=resdata?.info
    const {deliveryTime}=resdata?.info.sla
    return (
      <div className="rescard">
        <img
          className="resimage"
          src={
            IMAGE_URL+
            cloudinaryImageId
          }
        />
      <Link to={"/resinfo/" + id}><h2>{name}</h2></Link>
        <h3>
          <span className="rating">{avgRating}</span> &nbsp;
          {deliveryTime}
        </h3>
        <h3>{cuisines}</h3>
        <h3>{areaName}</h3>
      </div>
    );
  };