import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {DateTime} from 'luxon';
import { LikeOutlined} from '@ant-design/icons';
import {useDispatch} from "react-redux";
import '../App.css';
import {Link} from "react-router-dom";
import  {AddVideo} from '../Actions';

const RecommendedVideos = () => {

    const [videoCards, setVideoCards] = useState([]);

    const dispatch = useDispatch();
   
    useEffect(() => {
      axios
        .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&part=player&chart=mostPopular&maxResults=15&regionCode=in&key=AIzaSyCAdv84hg9sERDkh6qtL5Vuk-c9bUlI02k`)
        .then(response => {
          console.log(response.data.items);
          setVideoCards(response.data.items);
        })
        .catch(error => {
          console.log(error);
        })
    }, [])

    
    const HistroyVideo = (item) => {
      dispatch(AddVideo(item))
    }

    return (
        <>
        <div className='videos'>
            <div className='videocard'>
                {
                  videoCards && videoCards.length>0 && videoCards.map((item) => {
                    const snippet = item.snippet;
                    const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
                    return (
                      <>  
                      <div className='info'>
                          <Link to={`/${item.id}`}>
                            <img onClick={() => HistroyVideo(item)}   className='videocard__image' src={snippet.thumbnails.medium.url} alt="#"/><br/>
                          </Link>
                            <h6>{snippet.title}</h6>
                            {timestamp}   /  views {item.statistics.viewCount}<br/>
                            Likes {item.statistics.viewCount}<br/><br/>
                      </div>
                      </>
                    )
                  })
                }
            </div>
        </div>
        </>
    );
}

export default RecommendedVideos;
