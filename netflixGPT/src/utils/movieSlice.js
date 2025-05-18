import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({

    name:"movie",
    initialState:{
        nowPlayingMovie: null,
        popularMovie:null,
        trendingMovie:null,
        upcomingMovie:null,
        trailerVideo:null
    },
        
    reducers:{
        addNowPlayingMovie:(state,action)=>{
           state.nowPlayingMovie = action.payload;
        },
        addPopularMovie:(state, action)=>{
            state.popularMovie= action.payload;
        },
        addTrendingMovie:(state, action)=>{
            state.trendingMovie= action.payload;
        },
        addUpcomingMovie:(state, action)=>{
            state.upcomingMovie= action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
         },

    }

});

export const {addNowPlayingMovie,addPopularMovie,addTrendingMovie,addUpcomingMovie, addTrailerVideo}= movieSlice.actions;
export default movieSlice.reducer;