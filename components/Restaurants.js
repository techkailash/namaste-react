import { restaurants } from '../utils/mockData';

const Restaurants = () => {
  return (
    <div className="restaurant-container">
      {restaurants.map((restaurant) => {
        const { id, name, cuisines, avgRating, costForTwo, cloudinaryImageId } = restaurant.info;
        return (
          <div className="res-card" key={id}>
            <img
              className="res-card-img"
              src={
                'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
                cloudinaryImageId
              }
            />
            <h3>{name}</h3>
            <h4>
              {avgRating}, {costForTwo}
            </h4>
            <p>{cuisines.join(', ')}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Restaurants;
