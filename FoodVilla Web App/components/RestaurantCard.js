import {restaurantList , IMG_CLD_URL} from "../config";

const burgerKing = {
    name: "Burger King",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cusines: ["Burger", "American"],
    rating: "4.2",
    };
  
  const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    costForTwoString,
    avgRating,
  }) => {
    return (
      <div className="card">
        <img
          src={
            IMG_CLD_URL+
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <span>
        <h4><i class="fa-solid fa-star"></i>{avgRating}</h4>
         
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    );
  };
  

  export default RestaurantCard