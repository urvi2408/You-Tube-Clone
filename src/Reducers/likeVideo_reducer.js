const intialstate={
    likeVideoList: []
}

const LikeVideo_reducer = ( state =  intialstate , action ) => {
    
    switch (action.type) {
        case "ADD_LIKE_VIDEO": 
        console.log("data from reducer",action?.payload?.video);
        
        return {
            ...state,
             likeVideoList: [
                 ...state.likeVideoList,  
                 {
                    likeVideoList:action?.payload?.video
                 }
             ]
        }

        case "DELETE_LIKE_VIDEO":
            const newLikeList = state?.likeVideoList?.filter((curElem) => {
                return(
                    curElem?.likeVideoList?.id !== action?.payload?.video?.likeVideoList?.id)
                }
                )
            return {
                ...state,
                likeVideoList:newLikeList
              };

        case "REMOVE_LIKE_VIDEO":
            return {
                ...state,
                likeVideoList:[]
            };

        default:
        return state;
    } 
};

export default LikeVideo_reducer;