import React from "react";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

const PostItem = (
    {
        post = {
            "_id": 123,
            "avatar": "spacex.png",
            "userName": "SpaceX",
            "handle": "SpaceX",
            "content": "Dennis and Akiko Tito are the first crewmembers on Starship's second commercial spaceflight around the Moon",
            "time": "23h",   "image": "post1.jpeg",
            "comment": 595,
            "repost": 1168,
            "like": "11.1K"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={post.avatar} className="col-12 rounded-circle" alt=""/>
                </div>
                <div className="col-10">
                    <span className="fw-bold me-1">{post.userName}</span>
                    <span className="text-primary fa fa-check-circle me-1"></span>
                    <span className="color-lightgray">@{post.handle}</span>
                    <span className="color-lightgray">· {post.time}</span>
                    <div className="float-end fa fa-ellipsis-h color-lightgray"></div>
                    <div>{post.content}</div>
                    <img src={post.image} className="card-img-top mt-2 rounded-3 border-lightgray" alt=""/>
                    <div className="row mt-2">
                        <div className="col-3 color-lightgray">
                            <i className="fa-regular fa-comment me-1"></i>
                            <span>{post.comment}</span>
                        </div>
                        <div className="col-3 color-lightgray">
                            <i className="fa-sharp fa-solid fa-repeat me-1"></i>
                            <span>{post.repost}</span>
                        </div>
                        <div className="col-3 color-lightgray">
                            <i className="fa-regular fa-heart me-1"></i>
                            <span>{post.like}</span>
                        </div>
                        <div className="col-3 color-lightgray">
                            <i className="fa-solid fa-arrow-up-from-bracket"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;