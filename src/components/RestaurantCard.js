import { IMAGE_CDN_URL } from "../config";
import { useEffect, useState } from "react";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  feeDetails,
}) => {
  return (
    <div className="card">
      <img src={IMAGE_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>Ratings: {avgRating} stars</h4>
      <h4>
        <b>Price : Rs. {feeDetails.totalFee}</b>
      </h4>

      {/* <button type="button" onClick={() => handleCart}>
        Add to Cart
      </button> */}
    </div>
  );
};

export default RestaurantCard;
