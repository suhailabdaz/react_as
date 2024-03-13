import { Rescard } from "./resCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";

const body = {
  display: "flex",
  flexWrap: "wrap",
};

const Body = () => {
  const [resListData, setresListData] = useState(resList);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&pagetype=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("json", json);
    const newlist =
      json?.data?.cards[2].card.card.gridElements?.infoWithStyle.restaurants;
    console.log(newlist);

    setresListData(newlist);
  };

  return (
    <div className="body" style={body}>
      <button
        type="button"
        onClick={() => {
          let filteredlist = resListData.filter(
            (res) => res.info.avgRating >= 4.5
          );
          setresListData(filteredlist);
        }}
      >
        top rated restaurants
      </button>
      {resListData &&
        resListData.map((restaurant) => (
          <Rescard key={restaurant.info.id} resdata={restaurant} />
        ))}
    </div>
  );
};

export default Body;
