import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import ReactPlayer from 'react-player';
import Header from './Header';
import "../App.css";
import RecommendedVideos from './RecommendedVideos';
import { DateTime } from 'luxon';
import {useDispatch} from "react-redux";
import { AddWatchLaterVideo,AddLikeVideo,AddVideo } from '../Actions';
import { LikeOutlined ,DislikeOutlined ,ShareAltOutlined,FieldTimeOutlined,DownloadOutlined} from '@ant-design/icons';
import SideBar from './SideBar';

const Video = () => {
    const {id} = useParams();
    const [data,setData] = useState([]);

    const dispatch = useDispatch();
   
    
    useEffect(() => {
      axios
        .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&part=player&part=replies&id=${id}&key=AIzaSyCAdv84hg9sERDkh6qtL5Vuk-c9bUlI02k`)
        .then(response => {
          console.log(response.data.items);
          setData(response.data.items);
        })
        .catch(error => {
          console.log(error);
        })
    }, [id])

    const WatchLater = () => {
      dispatch(AddWatchLaterVideo(data))
    }

    const LikeVideo = () => {
      dispatch(AddLikeVideo(data))
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
          <ReactPlayer url={url} controls height={480} width={900}/>
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
    <LikeOutlined onClick={LikeVideo} className='like'/>  like
    <DislikeOutlined  className="dislike"/>   Dislike
    <ShareAltOutlined className="share"/>   Share
    <FieldTimeOutlined onClick={WatchLater} className="watchlater"/>  Watch Later
    <DownloadOutlined className='download'/>  DownLoad
    </div>
  </>
  )
}

export default Video