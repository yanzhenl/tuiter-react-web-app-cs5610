import React from "react";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitsStats from "./tuits-stats";

const TuitItem = (
    {
        tuits = {
            _id: 234,
            topic: "Space",
            userName: "SpaceX",
            time: "2h",
            title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            image: "spacex.png",
            liked: true,
            replies: 123,
            retuits: 432,
            likes: 2345,
            handle: "@spacex",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
      }
      
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={tuits.image} className="col-12 rounded-circle" alt=""/>
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(tuits._id)}></i>
                    <span className="fw-bold me-1">{tuits.username}</span>
                    <span className="text-primary fa fa-check-circle me-1"></span>
                    <span className="color-lightgray">{tuits.handle}</span>
                    <span className="color-lightgray">· {tuits.time}</span>
                    <div>{tuits.tuit}</div>
                    <div className="row mt-2">
                        <TuitsStats tuits={tuits}/>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;