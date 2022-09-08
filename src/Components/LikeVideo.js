import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import Header from './Header';
import { LikeOutlined} from '@ant-design/icons';
import LikeVideo_reducer from '../Reducers/likeVideo_reducer';

const LikeVideo = () => {
    
    const L_selector  = useSelector((state) => state?.L_reducer?.likeVideoList)
    console.log("data from like" , L_selector);

    return (
    <div>
        <Header/>
        {
            L_selector && L_selector?.length > 0 && 
            L_selector?.map((video)=>{
            console.log("video",video)

            const url = video?.likeVideoList[0]?.player?.embedHtml;
            const snippet = video?.likeVideoList[0]?.snippet?.title;
            const views = video?.likeVideoList[0]?.statistics?.viewCount;
            const likes = video?.likeVideoList[0]?.statistics?.likeCount;

            return (
              <>
                <div className='react-player'>
                <div className='videoplayer'>
                <ReactPlayer url={url} controls height={300} width={600}/>
                </div>
                </div>
                <h4 className='title'>{snippet}</h4>
                <div className='datainfo'>
                views {views}<br/>
                <LikeOutlined/>{likes}<br/><br/>
                </div>
              </>
            )
          })
        }
    </div>
  );
}

export default LikeVideo ;