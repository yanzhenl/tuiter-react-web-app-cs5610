import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useDispatch } from "react-redux";
import { clickLike } from "./tuits-reducer";

function TuitsStats({tuits}) {
    const dispatch = useDispatch();
    const handleLike = () => {
        dispatch(clickLike(tuits))
    }
    return(
        <div className="row">
            <div className="col-3 color-lightgray">
                <i className="fa-regular fa-comment me-1"></i>
                <span>{tuits.replies}</span>
            </div>
            <div className="col-3 color-lightgray">
                <i className="fa-sharp fa-solid fa-repeat me-1"></i>
                <span>{tuits.retuits}</span>
            </div>
            <div className="col-3 color-lightgray">
                <i onClick={() => handleLike(tuits)} style={{cursor: "hand"}}
                   className={`fa-heart me-1 ${tuits.liked ? "color-red fa-solid":"fa-regular"}`}></i>
                <span>{tuits.likes}</span>
            </div>
            <div className="col-3 color-lightgray">
                <i className="fa-solid fa-share-nodes"></i>
            </div>
        </div>
    );
}
export default TuitsStats;