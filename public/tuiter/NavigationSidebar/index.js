const NavigationSidebar = (highlight = 'Home') => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
     <a class="list-group-item d-flex ${highlight === "Home" ? "active": ''}" href="../HomeScreen/index.html">
        <i class="fa fa-home mt-1"></i><span class="pos-relative-left-3 d-none d-xl-block">Home</span></a>
     <a class="list-group-item d-flex ${highlight === "Explore" ? "active": ''}" href="../ExploreScreen/index.html">
        <i class="fa fa-hashtag mt-1"></i><span class="pos-relative-left-3 d-none d-xl-block">Explore</span></a>
     <a class="list-group-item d-flex" href="/">
        <i class="fa fa-bell mt-1"></i><span class="pos-relative-left-3 d-none d-xl-block">Notifications</span></a>
     <a class="list-group-item d-flex" href="/">
        <i class="fa fa-envelope mt-1"></i><span class="pos-relative-left-3 d-none d-xl-block">Messages</span></a>
     <a class="list-group-item d-flex" href="/">
        <i class="fa fa-bookmark mt-1"></i><span class="pos-relative-left-3 d-none d-xl-block">Bookmarks</span></a>
     <a class="list-group-item d-flex" href="/">
        <i class="fa fa-list mt-1"></i><span class="pos-relative-left-3 d-none d-xl-block">Lists</span></a>
     <a class="list-group-item d-flex" href="/">
        <i class="fa fa-user mt-1"></i><span class="pos-relative-left-3 d-none d-xl-block">Profile</span></a>
     <a class="list-group-item d-flex" href="/">
        <i class="fa fa-ellipsis-h mt-1"></i><span class="d-none d-xl-block pos-relative-left-3">More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;