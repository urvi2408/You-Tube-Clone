const initialState = {
    historylist: []
}

const History_reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "ADD_VIDEO":
            console.log('add', action.payload);
            
            // Check if video already exists in history
            const existsInHistory = state.historylist.some(
                video => video.id === action?.payload?.video?.id
            );
            
            if (existsInHistory) {
                return state;
            }

            return {
                ...state,
                historylist: [
                    ...state.historylist,
                    action?.payload?.video
                ]
            }

        case "DELETE_VIDEO":
            const newHistoryList = state?.historylist?.filter((video) => {
                return video?.id !== action?.payload?.video?.id
            });
            return {
                ...state,
                historylist: newHistoryList
            };

        case "REMOVE_HISTORY_VIDEO":
            return {
                ...state,
                historylist: []
            };
              
        default:
            return state;
    }
};

export default History_reducer;
