import React from "react";
import PostItem from "./post-item";
import Posts from "./posts.json";

const HomeComponent = () => {
    return (
        <ul className="list-group">
            {
                Posts.map(post =>
                    <PostItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default HomeComponent;