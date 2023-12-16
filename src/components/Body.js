import RestaurantCard from "./RestaurantCard"
import { restaurantList } from "../config"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

function handleFilter(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase().trim())
  )
  return filteredData
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("")

  //   useEffect(() => {
  //     setRestaurants(
  //       restaurants.filter((restaurant) =>
  //         restaurant.info.name
  //           .toLowerCase()
  //           .includes(searchText.toLowerCase().trim())
  //       )
  //     );
  //   }, [searchText]);

  // empty dep. array => once after initial render
  // dep. array with data, eg: [searchText] => once after initial render + everytime inside the bracket re-render, i.e every time searchText changes
  // no dep. array => once after initial render + everytime components re-renders
  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants() {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5101345&lng=73.92277299999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const json = await apiData.json()
    console.log("data", json)

    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }

  // not render component(early return)
  // if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter">
        <input
          type="text"
          placeholder="Type restaurant name"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button
          onClick={() => {
            const data = handleFilter(searchText, allRestaurants)
            setFilteredRestaurants(data)
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length > 0
          ? filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}
                >
                  <RestaurantCard {...restaurant.info} />
                </Link>
              )
            })
          : "No data Found"}
      </div>
    </>
  )
}

export default Body
