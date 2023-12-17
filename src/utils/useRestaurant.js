import { useState, useEffect } from "react"
import { FETCH_MENU_URL } from "../config"

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null)

  useEffect(() => {
    getRestaurantInfo()
  }, [])

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId)
    const json = await data.json()
    setRestaurant(
      json?.data?.cards
      // json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards[1]
    )
  }

  return restaurant
}

export default useRestaurant
