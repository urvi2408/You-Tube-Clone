import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import Header from './Header';
import { LikeOutlined,DeleteOutlined} from '@ant-design/icons';
import "../App.css";
import SideBar from './SideBar';
import { useDispatch } from 'react-redux';
import {DeleteWatchLaterVideo,RemoveWatchLaterVideos} from "../Actions/index"

   const WatchLater = () => {
    
      const w_selector  = useSelector((state) => state?.w_reducer?.WatchLaterList)
      console.log("data from watchlater" , w_selector);
      
      const dispatch = useDispatch();

    return (
    <div>
        <Header/>
        <div className='searchsidebar'>
           <div className='leftsidebar'>
              <SideBar/> 
           </div>
          
           <div className='searchvideoes'>
        {
          w_selector && w_selector?.length > 0 && 
          w_selector?.map((video)=>{
            console.log("video",video)

            const url = video?.WatchLaterList?.player?.embedHtml;
            const snippet = video?.WatchLaterList?.snippet?.title;
            const views = video?.WatchLaterList?.statistics?.viewCount;
            const likes = video?.WatchLaterList?.statistics?.likeCount;

            return (
              <>
              <div>
                <div className='react-player'>
                   <div className='videoplayer'>
                    <ReactPlayer url={url} controls height={300} width={600}/>
                   </div>
                </div>
                <div>
                   <h4 className='title'>{snippet}</h4>
                   <div className='datainfo'>
                      views {views} <br/>
                      <LikeOutlined/>{likes}<br/>
                      <DeleteOutlined key={video?.id} onClick={() => dispatch(DeleteWatchLaterVideo(video))}/> Remove From Watch Later<br/><br/>
                   </div>
                </div>
              </div>
              </>
            )
          })
        }
           </div> 
        </div>
        <button className='btn' onClick={() => dispatch(RemoveWatchLaterVideos(w_selector))}>clear</button>
    </div>
    );
}

export default WatchLater;