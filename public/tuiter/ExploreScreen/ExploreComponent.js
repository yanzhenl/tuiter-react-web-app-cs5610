import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                <div class="col-11 wd-position-relative-left-10">
                    <div class="position-relative">
                        <i class="fa fa-search zindex-bring-to-front color-lightgray search-position"></i>
                    </div>
                    <input class="rounded-pill col-11 text-indent wd-relative-right-30 
                                   bg-white input-border"
                           type="text" placeholder="Search Twitter">
                </div>
                <div class="col-1">
                    <a href="explore-settings.html">
                    <i class="fa fa-cog mt-2" style="color: #00acee"></i></a>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs mt-2">
                      <!-- tabs -->
               <li class="nav-item">
                   <a class="nav-link active" aria-current="page" href="for-you.html">For you</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="trending.html">Trending</a>
               </li>
               <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
               </li>
               <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
               </li>
               <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
               </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative">
               <img src="starship.webp" class="col-12">
               <div class="overlaid-text text-black zindex-bring-to-front fw-bold">SpaceX's Starship</div>
           </div>
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
