const intialstate={
    WatchLaterList: []
}

const watchlater_reducer = ( state =  intialstate , action ) => {
    console.log("data from reducer",action?.payload?.video);

    switch (action.type) {
        case "ADD_WATCHLATER_VIDEO": 
        return {
            ...state,
            WatchLaterList:[
                ...state.WatchLaterList,
                {
                    WatchLaterList:action?.payload?.video
                }
            ]
        }

        case "DELETE_WATCHLATER_VIDEO":
            const newWatchLaterList = state?.WatchLaterList?.filter((curElem) => {
                return(
                    curElem?.WatchLaterList?.id !== action?.payload?.video?.WatchLaterList?.id)
                }
                )
            return {
                ...state,
                WatchLaterList:newWatchLaterList
              };

        case "REMOVE_WATCHLATER_VIDEO":
            return {
               ...state,
                WatchLaterList:[]
            };

        default:
        return state;
    } 
};

export default watchlater_reducer;