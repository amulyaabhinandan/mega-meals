import { IMAGE_CDN_URL } from "../config";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
}) => {
  return (
    <div className="card">
      <img src={IMAGE_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>Ratings: {avgRating} stars</h4>
      <h4>
        <b>Offer : {costForTwo}</b>
      </h4>
    </div>
  );
};

export default RestaurantCard;
