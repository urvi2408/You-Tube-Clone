import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import Header from './Header';
import { LikeOutlined} from '@ant-design/icons';
// import LikeVideo_reducer from '../Reducers/likeVideo_reducer';

const AddVideo = () => {
    
    const H_selector  = useSelector((state) => state?.H_reducer?.historylist)
    console.log("data from history" , H_selector);

    return (
    <div>
        <Header/>
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

export default AddVideo ;