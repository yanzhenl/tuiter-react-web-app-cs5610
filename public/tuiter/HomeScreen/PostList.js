const postList = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row">
            <div class="col-2">
                <img class="col-12 rounded-circle" src="${post.avatar}">
            </div>
            <div class="col-10 font-14px">
                <span class="fw-bold">${post.name}</span>
                <span class="fa fa-check-circle"></span>
                <span class="color-lightgray">@${post.handle}</span>
                <span class="color-lightgray">· ${post.time}</span>
                <div class="float-end fa fa-ellipsis-h color-lightgray"></div>
                <div>${post.content}</div>
                <div class="card border-lightgray mt-2">
                    <img class="card-img-top" src="${post.image}">
                    <div class="card-body rounded-bottom border-top-lightgray">
                        <div class="card-title">${post.title}</div>
                        <div class="card-text color-lightgray">${post.text}</div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-3 color-lightgray">
                       <i class="fa-regular fa-comment"></i>
                       <span>${post.comment}</span>
                    </div>
                    <div class="col-3 color-lightgray">
                       <i class="fa-sharp fa-solid fa-repeat"></i>
                       <span>${post.repost}</span>
                    </div>
                    <div class="col-3 color-lightgray">
                       <i class="fa-regular fa-heart"></i>
                       <span>${post.like}</span>
                    </div>
                    <div class="col-3 color-lightgray">
                       <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
        </div>
        </li>
    `);
}
export default postList;