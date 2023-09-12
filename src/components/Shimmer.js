import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
  // return <h1>Shimmer UI is loading...</h1>;
  return (
    // <>
    //   <Skeleton width={250} height={200} />
    //   <br></br>
    //   <Skeleton width={200} height={50} />
    // </>
    <div className="restaurant-list">
      {Array(14)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer"></div>
        ))}
    </div>
  );
};

export default Shimmer;
