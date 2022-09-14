const intialstate={
    historylist: []
}

const History_reducer = ( state =  intialstate , action ) => {
    
    switch (action.type) {
        case "ADD_VIDEO": 
        console.log('add',action.payload);
        return {
            ...state,
            historylist:[
                ...state.historylist,
                {
                    historylist:action?.payload?.video
                }
            ]
        }
        case "DELETE_VIDEO":
            const newshistorylist = state?.historylist?.filter((curElem) => {
                return(
                    curElem?.historylist?.id !== action?.payload?.video?.historylist?.id)
                }
                )
            return {
                ...state,
                historylist:newshistorylist
              };

        case "REMOVE_HISTORY_VIDEO":
            return {
                ...state,
                historylist:[]
            };
              
        default:
        return state;
    } 
};

export default History_reducer;