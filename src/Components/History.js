import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import Header from './Header';
import { LikeOutlined,DeleteOutlined} from '@ant-design/icons';
import SideBar from './SideBar';
import {useDispatch} from "react-redux";
import { DeleteVideo,RemoveHistoryVideos } from '../Actions';
import "../App.css";

const History = () => {
    
    const H_selector  = useSelector((state) => {
      console.log('state',state.H_reducer);
      return state?.H_reducer?.historylist
    })
    console.log("data from history" , H_selector);

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
            H_selector && H_selector?.length > 0 && 
            H_selector?.map((video)=>{
            console.log("video",video)

            const url = video?.historylist?.player?.embedHtml;
            const snippet = video?.historylist?.snippet?.title;
            const views = video?.historylist?.statistics?.viewCount;
            const likes = video?.historylist?.statistics?.likeCount;

            return (
              <>
              <div>
                <div className='react-player'>
                  <div className='videoplayer'>
                    <ReactPlayer url={url} 
                             controls 
                             height={300} 
                             width={600}
                    />
                  </div>
                </div>
                <div>
                   <h4 className='title'>{snippet}</h4>
                   <div className='datainfo'>
                      views {views}  <br/>
                      <LikeOutlined/>{likes}<br/>
                      <DeleteOutlined key={video.id} onClick={() => dispatch(DeleteVideo(video))} /> Remove From History<br/><br/>
                   </div>
                </div>
              </div>
              </>
            )
          })
        }
           </div>
        </div>
        <button className='btn' onClick={() => dispatch(RemoveHistoryVideos(H_selector))}>clear</button>
    </div>
  );
}

export default History ;