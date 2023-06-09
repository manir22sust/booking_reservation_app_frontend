import "./FeaturedProperties.css";
import useFetch from "../../hooks/useFetch";
export const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true");
  // console.log("featured pro", data);
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item, index) => (
            <div className="fpItem" key={index}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name} </span>
              <span className="fpCity">{item.city} </span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating} </button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
