import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        firstName: 'Jose', lastName: 'Annunziato', handle: '@jannunzi', tweets: '6,114 Tweets',
        profilePicture: '../images/jose.jpeg', 	bannerPicture: '../images/polyglot.jpeg',
        bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',	dateOfBirth: '7/7/1968', dateJoined: 'April 2009',
        followingCount: 340, followersCount: 223, editing: false,
    },
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        editProfile: (state, action) => {
            state.user = action.payload;
        }
    },
});

export default userSlice.reducer;
export const { editProfile } = userSlice.actions;