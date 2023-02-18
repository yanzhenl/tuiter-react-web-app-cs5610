import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js";
const PostSummaryList = () => {
    return (`
        <ul class="list-group">
        ${
            post.map(item => {
                return(PostSummaryItem(item));
            }).join('')
        }
    `);
}
export default PostSummaryList;