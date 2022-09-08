const intialstate={
    historylist: []
}

const History_reducer = ( state =  intialstate , action ) => {
    console.log("data from reducer",action?.payload?.video);

    switch (action.type) {
        case "ADD_VIDEO": 
        return {
            ...state,
            historylist:[
                ...state.historylist,
                {
                    historylist:action?.payload?.video
            }
            ]
        }
        default:
        return state;
    } 
};

export default History_reducer;