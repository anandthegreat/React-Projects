import React from "react";
import { useState, useEffect } from "react";
import { API_ENDPOINT } from "../../src/utils/constants";
import Shimmer from "./Shimmer";
import RestaurantCard from "../../src/components/RestaurantCard";

const Body = () => {

    const [apiData,setApiData] = useState([]);
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    
    /*DANGEROUS CODE BELOW: WHENEVER A STATE VARIABLE UPDATES, REACT RERENDERS THE
    COMPONENT - FETCH() WILL BE CALLED AGAIN - INFINITE LOOP */
    
    /*
    let i = 1;
    fetch(API_ENDPOINT)
    .then((response)=>{return response.json()})
    .then(data => {
            setApiData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
            console.log(i++);
            console.log(apiData);
        }
    ); */

    useEffect(() => {
      fetchData();
      console.log("useEffect invoked");
    }, []);

    const fetchData = async () => {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        
        setApiData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
        
        /* The below code wont work since React 18 batches the state updates, 
           so setting the state of apiData will not happen immediately,
           but setApiData and setListOfRestaurants will happen in batch
        */
        // setListOfRestaurants(apiData);

        setListOfRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);


    };
    
    console.log("Body Rendered");

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
        <div className="filter">
            <div className="top-rated-btn">
                <button onClick={
                    () => {
                        setListOfRestaurants(apiData.filter((x) => x.info.avgRating > 4.1));
                    }
                }> Top Rated Only</button>
            </div>

            <div className="search-btn">
                <input type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }
                }/>
                <button onClick={() => {
                    setListOfRestaurants(apiData.filter(x => 
                        (x.info.name.toLowerCase().includes(searchText.toLowerCase())) ||
                        (x.info.cuisines.join(',').toLowerCase().includes(searchText.toLowerCase()))
                    ));
                }}>Search</button>
            </div>
        </div>

        <div className="res-container">
            {
                listOfRestaurants.map(x=> <RestaurantCard key= {x.info.id} resList={x.info}/>)
            }
        </div>
    </div>
    );
};

export default Body;