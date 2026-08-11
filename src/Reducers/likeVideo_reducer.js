const initialState = {
    likeVideoList: []
}

const LikeVideo_reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "ADD_LIKE_VIDEO":
            console.log("data from reducer", action?.payload?.video);
            
            // Check if video already exists
            const existsInLikes = state.likeVideoList.some(
                video => video.id === action?.payload?.video?.id
            );
            
            if (existsInLikes) {
                return state;
            }

            return {
                ...state,
                likeVideoList: [
                    ...state.likeVideoList,
                    action?.payload?.video
                ]
            }

        case "DELETE_LIKE_VIDEO":
            const newLikeList = state?.likeVideoList?.filter((video) => {
                return video?.id !== action?.payload?.video?.id
            });
            return {
                ...state,
                likeVideoList: newLikeList
            };

        case "REMOVE_LIKE_VIDEO":
            return {
                ...state,
                likeVideoList: []
            };

        default:
            return state;
    }
};

export default LikeVideo_reducer;
