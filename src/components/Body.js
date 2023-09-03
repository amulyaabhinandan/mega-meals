import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useEffect, useState } from "react";

function handleFilter(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase().trim())
  );
  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  //   useEffect(() => {
  //     setRestaurants(
  //       restaurants.filter((restaurant) =>
  //         restaurant.info.name
  //           .toLowerCase()
  //           .includes(searchText.toLowerCase().trim())
  //       )
  //     );
  //   }, [searchText]);

  return (
    <>
      <div className="filter">
        <input
          type="text"
          placeholder="Type restaurant name"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (searchText !== "") {
              const data = handleFilter(searchText, restaurants);
              setRestaurants(data);
            } else {
              setRestaurants(restaurantList);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.length
          ? restaurants.map((restaurant) => {
              return (
                <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
              );
            })
          : "No data Found"}
      </div>
    </>
  );
};

export default Body;
