import { createSlice } from "@reduxjs/toolkit";
import tuitsArray from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../images/nasa.png",
   };

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   
const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuitsArray,
    reducers: {
        clickLike(state, action) {
            const tuit = state.find(tuit => tuit._id === action.payload._id);
            tuit.liked = !tuit.liked;
            tuit.likes += tuit.liked ? 1 : -1;
        },
        deleteTuit(state, action) {
            const index = state
               .findIndex(tuit =>
                  tuit._id === action.payload);
            state.splice(index, 1);
          },       
        createTuit(state, action) {
            state.unshift({
              ...action.payload,
              ...templateTuit,
              _id: (new Date()).getTime(),
            })
          }
    }
});

export const { clickLike, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;