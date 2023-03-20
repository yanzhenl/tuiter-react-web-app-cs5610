import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a href="/" className="list-group-item"><i className="fab fa-twitter"></i></a>
            <Link to="/tuiter/home" className={`list-group-item d-flex ${active === 'home'?'active':''}`}>
                <i className="fa fa-home me-1 mt-1"></i>
                <span className="d-none d-xl-block">Home</span></Link>
            <Link to="/tuiter/explore" className={`list-group-item d-flex ${active === 'explore'?'active':''}`}>
                <i className="fa fa-hashtag me-1 mt-1"></i>
                <span className="d-none d-xl-block">Explore</span></Link>
            <Link to="/" className={`list-group-item d-flex ${active === 'notifications'?'active':''}`}>
                <i className="fa fa-bell me-1 mt-1"></i>
                <span className="d-none d-xl-block">Notifications</span></Link>
            <Link to="/" className={`list-group-item d-flex ${active === 'messages'?'active':''}`}>
                <i className="fa fa-envelope me-1 mt-1"></i>
                <span className="d-none d-xl-block">Messages</span></Link>
            <Link to="/" className={`list-group-item d-flex ${active === 'bookmarks'?'active':''}`}>
                <i className="fa fa-bookmark me-1 mt-1"></i>
                <span className="d-none d-xl-block">Bookmarks</span></Link>
            <Link to="/" className={`list-group-item d-flex ${active === 'lists'?'active':''}`}>
                <i className="fa fa-list me-1 mt-1"></i>
                <span className="d-none d-xl-block">Lists</span></Link>
            <Link to="/tuiter/profile" className={`list-group-item d-flex ${active === 'profile'?'active':''} ${active === 'edit-profile'?'active':''}`}>
                <i className="fa fa-user me-1 mt-1"></i>
                <span className="d-none d-xl-block">Profile</span></Link>
            <Link to="/" className={`list-group-item d-flex ${active === 'more'?'active':''}`}>
                <i className="fa fa-ellipsis-h me-1 mt-1"></i>
                <span className="d-none d-xl-block">More</span></Link>
        </div>
    );
};
export default NavigationSidebar;