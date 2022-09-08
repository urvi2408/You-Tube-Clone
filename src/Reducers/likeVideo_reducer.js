const intialstate={
    likeVideoList: []
}

const LikeVideo_reducer = ( state =  intialstate , action ) => {
    console.log("data from reducer",action?.payload?.video);

    switch (action.type) {
        case "ADD_LIKE_VIDEO": 
        return {
            ...state,
            likeVideoList:[
                ...state.likeVideoList,
                {
                    likeVideoList:action?.payload?.video
            }
            ]
        }
        default:
        return state;
    } 
};

export default LikeVideo_reducer;