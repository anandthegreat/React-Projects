import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_ENDPOINT } from "../utils/constants";
import Shimmer from "./Shimmer";

/*
    We want to use the id passed in the props
    and then call the API, and extract data for the id
    and display the Menu here
*/


const RestaurantMenu = () => {

    const [filteredMenuList, setFilteredMenuList] = useState([]);
    
    // useParams returns an object, so we destructure on the fly 
    const {id} = useParams();   

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const response = await fetch(RES_MENU_ENDPOINT + id);
        const data = await response.json();
        const completeMenuList = data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        setFilteredMenuList(completeMenuList.filter((x) => x?.card?.card?.itemCards != undefined));
    };

    console.log(filteredMenuList);

    return filteredMenuList.length === 0 ? <Shimmer/> :
     (
        <div className="res-menu">
            <h2>Restaurant Menu</h2>

            {filteredMenuList.map((x, id) => (
                // Learning: JSX elements must have one parent element
                <div id={id}>
                    <h4>{x.card.card.title}</h4>
                    <ul>
                        {x.card.card.itemCards.map((y)=> (
                            <li key={y.card.info.id}>{y.card.info.name}: ₹{(y.card.info.defaultPrice || y.card.info.price)/100}</li>
                            )
                        )}
                    </ul>
                </div>
                
                )
            )}
            
        
        </div>
    )
};

export default RestaurantMenu;