import {IMAGE_URL} from "../utils/constants"



export const Rescard = (props) => {
    const {resdata} = props;
  
    const {name,areaName,cuisines,avgRating,cloudinaryImageId}=resdata?.info
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
        <h2>{name}</h2>
        <h3>
          <span className="rating">{avgRating}</span> &nbsp;
          {deliveryTime}
        </h3>
        <h3>{cuisines}</h3>
        <h3>{areaName}</h3>
      </div>
    );
  };