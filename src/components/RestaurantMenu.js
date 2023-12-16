import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import { IMAGE_CDN_URL } from "../config"

const RestaurantMenu = () => {
  const { resId } = useParams()
  const [restaurant, setRestaurant] = useState(null)

  useEffect(() => {
    getRestaurantInfo()
  }, [])

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5101345&lng=73.92277299999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&menuId=" +
        resId
    )
    const json = await data.json()
    console.log("Meny Dataaaaa: ", json)
    setRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    console.log("Menuuuuuuuuu: ", restaurant)
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant[0]?.name}</h2>
        <img src={IMAGE_CDN_URL + restaurant[0].info.cloudinaryImageId} />
        <h3>{restaurant?.info?.areaName}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>{restaurant?.cuisines}</ul>
      </div>
    </div>
  )
}

export default RestaurantMenu
