import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { editProfile } from "../profile/profile-reducer";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

function EditProfile () {
    const { user } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);
    const dispatch = useDispatch(); 
    const handleSave = () => {
        dispatch(editProfile(profile));
    };

    return(
        <div>
            <div className="row">
                <div className="col-1">
                    <Link to="/tuiter/profile"><i className="bi bi-x-lg text-muted"></i></Link>
                </div>
                <div className="col-9">
                    <span className="fw-bold mt-4">Edit profile</span>
                </div>
                <div className="col-2">
                    <Link to="/tuiter/profile">
                        <button className="rounded-pill float-end save-button me-2" onClick={handleSave}>Save</button></Link>
                </div>
                <img src = {user.bannerPicture} className="img-fluid mt-2 mb-4" alt=""/>
                <div>
                    <img src = {user.profilePicture} className="rounded-circle profile-picture ms-3" alt=""/>
                </div>
            </div>

            <form className="form-floating mt-5">
                <input value={profile.firstName} onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                       className="form-control"/>
                <label className="floatingInputValue">First name</label>
            </form>

            <form className="form-floating mt-4">
                <input value={profile.lastName} onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                       className="form-control"/>
                <label className="floatingInputValue">Last name</label>
            </form>

            <form className="form-floating mt-4">
                <textarea value={profile.bio} onChange={(e) => setProfile({...profile, bio: e.target.value})}
                          className="form-control textarea-height"/>
                <label className="floatingInputValue">Bio</label>
            </form>

            <form className="form-floating mt-4">
                <input value={profile.location} onChange={(e) => setProfile({...profile, location: e.target.value})}
                       className="form-control"/>
                <label className="floatingInputValue">Location</label>
            </form>

            <form className="form-floating mt-4">
                <input type="url" value={profile.website} onChange={(e) => setProfile({...profile, website: e.target.value})}
                       className="form-control"/>
                <label className="floatingInputValue">Website</label>
            </form>

            <div className="mt-4 ms-2">
                <span className="text-muted">Birth date ·</span>
                <button className="text-primary transparent-button" 
                    onClick={() => setProfile({...profile, editing: !profile.editing})}>Edit</button>
                {profile.editing ? (
                    <div><input onChange={(e) => setProfile({...profile, dateOfBirth: e.target.value})} value={profile.dateOfBirth}/></div>
                ) : (
                    <div>{profile.dateOfBirth}</div>
                )}
            </div>
        </div>
    );
}

export default EditProfile;