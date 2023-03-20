import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const tuitsArray = useSelector(
        (state) => state.tuits);
    return (
        <ul className="list-group">
            {
                tuitsArray.map(tuits =>
                    <TuitItem
                        key={tuits._id} tuits={tuits}/> )
            }
        </ul>
    );
};
export default TuitsList;