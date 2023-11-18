import { useEffect, useState } from 'react';

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resData = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const data = await resData.json();
    setRestaurants(data.data.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  };

  return restaurants;
};

export default useRestaurants;
