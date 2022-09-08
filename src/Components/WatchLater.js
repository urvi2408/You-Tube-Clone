import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import Header from './Header';
import { LikeOutlined,DeleteOutlined} from '@ant-design/icons';
import SideBar from './SideBar';
import "../App.css";

const WatchLater = () => {
    
      const w_selector  = useSelector((state) => state?.w_reducer?.WatchLaterList)
      console.log("data from watchlater" , w_selector);

    return (
    <div>
        <Header/>
        {
          w_selector && w_selector?.length > 0 && 
          w_selector?.map((video)=>{
            console.log("video",video)

            const url = video?.WatchLaterList[0]?.player?.embedHtml;
            const snippet = video?.WatchLaterList[0]?.snippet?.title;
            const views = video?.WatchLaterList[0]?.statistics?.viewCount;
            const likes = video?.WatchLaterList[0]?.statistics?.likeCount;

            return (
              <>
                <div className='react-player'>
                <div className='videoplayer'>
                <ReactPlayer url={url} controls height={300} width={600}/>
                </div>
                </div>
                <h4 className='title'>{snippet}</h4>
                <div className='datainfo'>
                views {views}  <DeleteOutlined /><br/>
                <LikeOutlined/>{likes}<br/><br/>
                </div>
              </>
            )
          })
        }
        </div>

  );
}

export default WatchLater;