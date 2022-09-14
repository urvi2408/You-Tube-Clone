import React from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { LikeOutlined,DeleteOutlined} from '@ant-design/icons';
import SideBar from './SideBar';
// import {useDispatch} from "react-redux";
import { DeleteLikeVideo,RemoveLikeVideos } from '../Actions';

const LikeVideo = () => {
    
    const L_selector  = useSelector((state) => state?.L_reducer?.likeVideoList);
    console.log("state" , L_selector);
    
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
            L_selector && L_selector?.length > 0 && 
            L_selector?.map((video)=>{
            console.log("video",video)

            const url =video?.likeVideoList?.player?.embedHtml;  
            const snippet = video?.likeVideoList?.snippet?.title;
            const views = video?.likeVideoList?.statistics?.viewCount;
            const likes = video?.likeVideoList?.statistics?.likeCount;

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
                      views {views} <br/>
                      <LikeOutlined/>{likes}<br/>
                      <DeleteOutlined key={video.id} onClick={() => dispatch(DeleteLikeVideo(video))} /> Remove From Like Videos<br/><br/>
                      <br/>
                   </div>
                </div>
              </div>
              </>
            )
          })
        }
           </div> 
        </div>
        <button className='btn' onClick={() => dispatch(RemoveLikeVideos(L_selector))}>clear</button>
    </div>
  );
}

export default LikeVideo ;