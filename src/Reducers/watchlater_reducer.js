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
        default:
        return state;
    } 
};

export default watchlater_reducer;