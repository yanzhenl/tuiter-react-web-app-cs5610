const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-10">
                    <div class="color-lightgray">${post.topic}</div>
                    <span>${post.userName}</span>
                    <span>
                        <span class="fa fa-check-circle"></span>
                        <span class="color-lightgray">- ${post.time}</span>
                    </span>
                    
                    <div>${post.title}</div>
                </div>
                <div class="col-2">
                    <img src="${post.image}" class="col-12 rounded-3">
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;