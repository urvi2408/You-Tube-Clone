const initialState = {
    WatchLaterList: []
}

const watchlater_reducer = (state = initialState, action) => {
    console.log("data from reducer", action?.payload?.video);

    switch (action.type) {
        case "ADD_WATCHLATER_VIDEO":
            // Check if video already exists
            const existsInWatchLater = state.WatchLaterList.some(
                video => video.id === action?.payload?.video?.id
            );
            
            if (existsInWatchLater) {
                return state;
            }

            return {
                ...state,
                WatchLaterList: [
                    ...state.WatchLaterList,
                    action?.payload?.video
                ]
            }

        case "DELETE_WATCHLATER_VIDEO":
            const newWatchLaterList = state?.WatchLaterList?.filter((video) => {
                return video?.id !== action?.payload?.video?.id
            });
            return {
                ...state,
                WatchLaterList: newWatchLaterList
            };

        case "REMOVE_WATCHLATER_VIDEO":
            return {
                ...state,
                WatchLaterList: []
            };

        default:
            return state;
    }
};

export default watchlater_reducer;
