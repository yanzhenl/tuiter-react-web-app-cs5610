const WhoToFollowListItem = (who) => {
    return (`
       <li class="list-group-item">
          <div class="row">
              <div class="col-2">
                 <img class="rounded-circle item-height-40" src="${who.avatarIcon}">
              </div>
              <div class="col-7">
                  <div class="float-left">${who.userName}</div>
                  <span class="fa fa-check-circle pos-relative-left-3"></span>
                  <div>@${who.handle}</div>
              </div>
              <div class="col-2 align-self-center">
                  <button type="button" class="btn btn-primary rounded-pill btn-sm">Follow</button>
              </div>
          </div>
       </li>
    `);
}
export default WhoToFollowListItem;