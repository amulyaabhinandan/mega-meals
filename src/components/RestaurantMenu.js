import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import { IMAGE_CDN_URL } from "../config"
import useRestaurant from "../utils/useRestaurant"

const RestaurantMenu = () => {
  const { resId } = useParams()

  const restaurant = useRestaurant(resId)

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
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
