import { CLOUDINARY_PREFIX } from "../../src/utils/constants";

const RestaurantCard = (resList) => {

    const {id,name,cloudinaryImageId,costForTwo,cuisines,avgRating} = resList.resList;
    return (
        <div className="res-card">
            <div className="res-img">
                <img src={CLOUDINARY_PREFIX + cloudinaryImageId} className="logo"></img>
            </div>
            <div className="res-details">
                <h4>{name}</h4>
                <p className="res-cuisines">{cuisines.join(', ')}</p>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                {/* <h4>{}</h4> */}
            </div>
        </div>
    )
};

export default RestaurantCard;