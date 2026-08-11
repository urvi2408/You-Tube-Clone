import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';
import { useDispatch } from "react-redux";
import '../App.css';
import { Link } from "react-router-dom";
import { AddVideo } from '../Actions';

const RecommendedVideos = () => {
  const [videoCards, setVideoCards] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&part=player&chart=mostPopular&maxResults=24&regionCode=in&key=AIzaSyCAdv84hg9sERDkh6qtL5Vuk-c9bUlI02k`)
      .then(response => {
        console.log(response.data.items);
        setVideoCards(response.data.items);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  const HistoryVideo = (item) => {
    dispatch(AddVideo(item))
  }

  const formatViews = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count;
  }

  return (
    <div className='videos'>
      <div className='videocard'>
        {videoCards && videoCards.length > 0 && videoCards.map((item) => {
          const snippet = item.snippet;
          const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
          return (
            <div className='info' key={item.id}>
              <Link to={`/${item.id}`}>
                <img
                  onClick={() => HistoryVideo(item)}
                  className='videocard__image'
                  src={snippet.thumbnails.medium.url}
                  alt={snippet.title}
                />
              </Link>
              <div className='video-details'>
                <h6>{snippet.title}</h6>
                <div className='video-channel'>
                  {snippet.channelTitle}
                </div>
                <div className='video-stats'>
                  {formatViews(item.statistics.viewCount)} views • {timestamp}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default RecommendedVideos;