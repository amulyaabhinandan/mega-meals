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
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5158057&lng=73.9271644&restaurantId=" +
        resId
    )
    const json = await data.json()
    console.log("Meny Dataaaaa: ", json)
    setRestaurant(
      json?.data?.cards
      // json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards[1]
    )
    console.log("Menuuuuuuuuu: ", restaurant)
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h4>Restaurant id: {resId}</h4>
        <h2>{restaurant[0]?.card.card.info.name}</h2>
        <img
          src={IMAGE_CDN_URL + restaurant[0]?.card.card.info.cloudinaryImageId}
        />
        <h4>
          Address: {restaurant[0]?.card.card.info.areaName},{" "}
          {restaurant[0]?.card.card.info.city}
        </h4>
        <h4>Price: {restaurant[0]?.card.card.info.costForTwoMessage}</h4>
        <h4>Average Rating: {restaurant[0]?.card.card.info.avgRating}</h4>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {console.log(
            "menu",
            restaurant?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          )}
          {restaurant?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
            (item) =>
              item?.card?.card?.title ? <li>{item?.card?.card?.title}</li> : ""
          )}
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu
