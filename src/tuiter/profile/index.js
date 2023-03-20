import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'

function ProfileComponent () {
    const { user } = useSelector((state) => state.user);
    return(
        <div>
            <div className="row">
                <div className="col-1">
                    <i className="fa fa-arrow-left center"></i> 
                </div>
                <div className="col-11">
                    <div className="fw-bold">{user.firstName} {user.lastName}</div>
                    <div className="text-muted">{user.tweets}</div>
                </div>
                <img src = {user.bannerPicture} className="img-fluid" alt=""/>
                <div>
                    <Link to="/tuiter/edit-profile">
                    <button className="rounded-pill float-end mt-2 button">Edit profile</button></Link>
                    <img src = {user.profilePicture} className="rounded-circle profile-picture ms-3" alt=""/>
                </div>
            </div>
            <div>
                <div className="fw-bold ms-3 mt-4">{user.firstName} {user.lastName}</div>
                <div className="text-muted ms-3">{user.handle}</div>
                <div className="text-black ms-3 mt-2">{user.bio}</div>
                <div className="text-muted ms-3 mt-2">
                    <i className="fa fa-location-dot mt-2"></i>
                    <span className="ms-1">{user.location}</span>
                    <i className="fa fa-birthday-cake ms-3 mt-2"></i>
                    <span className="ms-1">{user.dateOfBirth}</span>
                    <i className="fa-regular fa-calendar ms-3 mt-2"></i>
                    <span className="ms-1">Joined {user.dateJoined}</span>
                </div>
                <div className="text-muted ms-3 mt-2">
                    <span className="fw-bold text-black">{user.followingCount}</span>
                    <span className="ms-1">Following</span>
                    <span className="fw-bold text-black ms-3">{user.followersCount}</span>
                    <span className="ms-1">Followers</span>
                </div>
            </div>
        </div>
    );
};
export default ProfileComponent;