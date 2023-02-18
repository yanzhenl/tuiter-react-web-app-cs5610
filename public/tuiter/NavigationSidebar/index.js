const NavigationSidebar = (highlight = 'Home') => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
     <a class="list-group-item ${highlight === "Home" ? "active": ''}" href="../HomeScreen/index.html">
        <i class="fa fa-home"></i><span class="pos-relative-left-3 d-none d-xl-block">Home</span></a>
     <a class="list-group-item ${highlight === "Explore" ? "active": ''}" href="../ExploreScreen/index.html">
        <i class="fa fa-hashtag"></i><span class="pos-relative-left-3 d-none d-xl-block">Explore</span></a>
     <a class="list-group-item" href="/">
        <i class="fa fa-bell"></i><span class="pos-relative-left-3 d-none d-xl-block">Notifications</span></a>
     <a class="list-group-item" href="/">
        <i class="fa fa-envelope"></i><span class="pos-relative-left-3 d-none d-xl-block">Messages</span></a>
     <a class="list-group-item" href="/">
        <i class="fa fa-bookmark"></i><span class="pos-relative-left-3 d-none d-xl-block">Bookmarks</span></a>
     <a class="list-group-item" href="/">
        <i class="fa fa-list"></i><span class="pos-relative-left-3 d-none d-xl-block">Lists</span></a>
     <a class="list-group-item" href="/">
        <i class="fa fa-user"></i><span class="pos-relative-left-3 d-none d-xl-block">Profile</span></a>
     <a class="list-group-item" href="/">
        <i class="fa fa-ellipsis-h"></i><span class="pos-relative-left-3 d-none d-xl-block">More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;