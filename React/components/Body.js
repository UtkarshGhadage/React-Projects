import { useState } from "react";
import { restaurantList, IMG_CLD_URL } from "../config";
import RestaurantCard from "./RestaurantCard";



function filterData(searchText, restaurant){
    
    return restaurant.filter((restaurant) => restaurant.data.name.includes(searchText));
}


const Body = () => {
  //searchTxt is a local state variable
  const [searchText, setSearchText] = useState(); //to create state variables
  const [restaurant, setRestaurant] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button className="search-btn" 
                onClick={() => {
                    //filter data
                    const data = filterData(searchText, restaurant);
                    //update the state
                    setRestaurant(data);
                }}>

          Search
        </button>
      </div>

      <div className="res-list">
        {restaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
