import { IMD_CDN_URL } from "../Constants";

const RestrauntCard = ({name, cuisines,avgRating,cloudinaryImageId}) => {

  
    return (
        <div className="card">
           <img src={
           IMD_CDN_URL
           +
            cloudinaryImageId} alt={name} />

          <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRating}stars</h4>
        </div>
    );
};
export default RestrauntCard;