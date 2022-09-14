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

export const DeleteVideo = (video) => {
    console.log("data from delete action",video); 
    return (dispatch) => {
        dispatch({
        type:"DELETE_VIDEO",
        payload : {
            video:video
        }
        })
    }
}

export const DeleteLikeVideo = (video) => {
    console.log("data from delete action",video);
    return (dispatch) => {
        dispatch({
        type:"DELETE_LIKE_VIDEO",
        payload : {
            video:video
        }
        })
    }
}

export const DeleteWatchLaterVideo = (video) => {
    console.log("data from delete action",video);
    return (dispatch) => {
        dispatch({
        type:"DELETE_WATCHLATER_VIDEO",
        payload : {
            video:video
        }
        })
    }
}

export const RemoveWatchLaterVideos = (video) => {
    console.log("data from delete action",video);
    return (dispatch) => {
        dispatch({
        type:"REMOVE_WATCHLATER_VIDEO",
        payload : {
            video:video
        }
        })
    }
}

export const RemoveLikeVideos = (video) => {
    console.log("data from delete action",video);
    return (dispatch) => {
        dispatch({
        type:"REMOVE_LIKE_VIDEO",
        payload : {
            video:video
        }
        })
    }
}

export const RemoveHistoryVideos = (video) => {
    console.log("data from delete action",video);
    return (dispatch) => {
        dispatch({
        type:"REMOVE_HISTORY_VIDEO",
        payload : {
            video:video
        }
        })
    }
}