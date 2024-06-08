
import RestrauntCard from "./RestaurantCard";

import { restaurantList} from "../Constants";
import { useState } from "react";


function filterData(searchText, restaurants) {
    const filterData=  restaurants.filter((restaurant) =>
         restaurant.info.name.includes(searchText)
    );

    return filterData;
}

const Body = () => {
  const [searchText, setsearchText] =useState("");
  const [restaurants, setRestaurants]=useState(restaurantList);
    return(
      <>
      <div className="search-containerq">
        <input 
        type="text" 
        className="search-input" 
        placeholder="Search" 
        value={searchText}
        onChange={(e) => {
          setsearchText(e.target.value);
        }}
        />
        <button 
        className="search-btn"
        onClick={() =>{
        const data = filterData(searchText, restaurants);
        setRestaurants(data);
        }}
        >
          Search
        </button>
     </div>
        <div className="restaurant-list">
          {
            restaurants.map((restaurant) =>{
              return <RestrauntCard {...restaurant.info} key={restaurant.info.id}/>
            })
          } 
        </div>
</>

   );
};

export default Body;