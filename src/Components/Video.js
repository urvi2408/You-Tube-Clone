import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import ReactPlayer from 'react-player';
import Header from './Header';
import "../App.css";
import RecommendedVideos from './RecommendedVideos';
import { DateTime } from 'luxon';
import {useDispatch} from "react-redux";
import { AddWatchLaterVideo,AddLikeVideo } from '../Actions';
import { LikeOutlined ,DislikeOutlined ,ShareAltOutlined,FieldTimeOutlined,DownloadOutlined} from '@ant-design/icons';

const Video = () => {
    const {id} = useParams();
    const [data,setData] = useState([]);
    // const [buttonState,setButtonState]=useState(false);

    const dispatch = useDispatch();
   
    
    useEffect(() => {
      axios
        .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&part=player&id=${id}&key=AIzaSyCAdv84hg9sERDkh6qtL5Vuk-c9bUlI02k`)
        .then(response => {
          console.log("reeee",response.data.items);
          setData(response.data.items);
        })
        .catch(error => {
          console.log(error);
        })
    }, [id])

    const WatchLater = () => {
      dispatch(AddWatchLaterVideo(data[0]))
    }

    const LikeVideo = () => {
      dispatch(AddLikeVideo(data[0]))
    }

  return (
    <>
    
    {
      data && data.length>0 && data.map((item) => {
        const snippet = item.snippet;
        const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
        const url = item.player.embedHtml;
          return(
          <>
            <Header/>
            <div className='react-player'>
              <div className='videoplayer'>
                <ReactPlayer url={url} 
                             controls 
                             height={480} 
                             width={900}
                />  
              </div>
              <RecommendedVideos/>
            </div>

            <h4 className='title'>{snippet.title}</h4>
            <div className='datainfo'>
              {timestamp}   /  views {item.statistics.viewCount}<br/>
              <LikeOutlined/>{item.statistics.viewCount}<br/><br/>
            </div>
          </>
          );
      })
    }
    <div className='icons'>
      {/* <button className='button' 
              onClick={()=>{ setButtonState(true)}}  
              disabled={buttonState}> */}
        <LikeOutlined onClick={LikeVideo} className='like'/>  like 
      {/* </button> */}
      <DislikeOutlined  className="dislike"/>   Dislike
      <ShareAltOutlined className="share"/>   Share
      {/* <button className='button' 
              onClick={()=>{ setButtonState(true)}}  
              disabled={buttonState}> */}
         <FieldTimeOutlined onClick={WatchLater} className="watchlater"/>  Watch Later
      {/* </button> */}
      <DownloadOutlined className='download'/>  DownLoad
    </div>
  </>
  )
}

export default Video;