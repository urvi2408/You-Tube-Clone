export const AddWatchLaterVideo = (video) => {
    console.log("data from action",video);
    return (dispatch) => {
        dispatch({
        type:"ADD_WATCHLATER_VIDEO",
        payload : {
            video:video
        }
        })
    }
}

export const AddLikeVideo = (video) => {
    console.log("data from action",video);
    return (dispatch) => {
        
        dispatch({
        type:"ADD_LIKE_VIDEO",
        payload : {
            video:video
        }
        })
    }
}

export const AddVideo = (video) => {
    console.log("data from action",video);
    return (dispatch) => {
        dispatch({
        type:"ADD_VIDEO",
        payload : {
            video:video
        }
        })
    }
}