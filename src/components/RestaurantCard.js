import { IMAGE_CDN_URL } from "../config"
import { addItem } from "../utils/cartSlice"
import { UseDispatch, useDispatch } from "react-redux"
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
}) => {
  const dispatch = useDispatch()
  const handleAddItem = () => {
    dispatch(addItem("Mango"))
  }

  return (
    <>
      <div className="w-56 p-2 m-2 shadow-lg hover:scale-95 transition">
        <img className="rounded-lg" src={IMAGE_CDN_URL + cloudinaryImageId} />
        <h2 className="font-bold">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>Ratings: {avgRating} stars</h4>
        <h4 className="font-semibold">Offer : {costForTwo}</h4>
      </div>
      <div>
        <button
          className="p-2 m-5 bg-green-100"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button>
      </div>
    </>
  )
}

export default RestaurantCard
