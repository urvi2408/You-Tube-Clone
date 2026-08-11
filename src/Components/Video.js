import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Header from "./Header";
import "../App.css";
import RecommendedVideos from "./RecommendedVideos";
import { DateTime } from "luxon";
import { useDispatch, useSelector } from "react-redux";
import { AddWatchLaterVideo, AddLikeVideo, DeleteLikeVideo, DeleteWatchLaterVideo } from "../Actions";
import {
  LikeOutlined,
  LikeFilled,
  ShareAltOutlined,
  FieldTimeOutlined,
  CloseOutlined,
  FacebookFilled,
  TwitterOutlined,
  WhatsAppOutlined,
  LinkedinFilled,
  MailOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import SideBar from "./SideBar";
import { useSidebar } from "../context/SidebarContext";

const Video = () => {
  const { id } = useParams();
  const {isSidebarOpen} = useSidebar()
  const [data, setData] = useState([]);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const dispatch = useDispatch();

  // Check if video is already liked or in watch later
  const likeVideoList = useSelector((state) => state?.L_reducer?.likeVideoList);
  const watchLaterList = useSelector((state) => state?.w_reducer?.WatchLaterList);
  
  const isLiked = likeVideoList.some(video => video.id === id);
  const isInWatchLater = watchLaterList.some(video => video.id === id);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&part=player&id=${id}&key=AIzaSyCAdv84hg9sERDkh6qtL5Vuk-c9bUlI02k`
      )
      .then((response) => {
        console.log("video data", response.data.items);
        setData(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleWatchLater = () => {
    if (data && data.length > 0) {
      if (isInWatchLater) {
        // Find the video in watch later list and remove it
        const videoInList = watchLaterList.find(video => video.id === id);
        if (videoInList) {
          dispatch(DeleteWatchLaterVideo(videoInList));
        }
      } else {
        // Add to watch later
        dispatch(AddWatchLaterVideo(data[0]));
      }
    }
  };

  const handleLikeVideo = () => {
    if (data && data.length > 0) {
      if (isLiked) {
        // Find the video in liked list and remove it
        const videoInList = likeVideoList.find(video => video.id === id);
        if (videoInList) {
          dispatch(DeleteLikeVideo(videoInList));
        }
      } else {
        // Add to liked videos
        dispatch(AddLikeVideo(data[0]));
      }
    }
  };

  const handleShare = () => {
    setShowSharePopup(true);
    setCopySuccess(false);
  };

  const handleCloseShare = () => {
    setShowSharePopup(false);
    setCopySuccess(false);
  };

  const currentUrl = window.location.href;
  const videoTitle = data[0]?.snippet?.title || "";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(videoTitle)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(videoTitle + ' ' + currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(videoTitle)}&body=${encodeURIComponent(currentUrl)}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const handleSocialShare = (platform) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  const formatViews = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count;
  };

  const formatCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    }
    return count;
  };

  return (
    <>
      <Header />
      <div className="video-page-container"> {isSidebarOpen && (
          <div className='leftsidebar'>
            <SideBar/>
          </div>
        )}
        {data && data.length > 0 && data.map((item) => {
          const snippet = item.snippet;
          const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
          const url = item.player.embedHtml;
          
          return (
            <div key={item.id} className="video-content-wrapper">
              <div className="video-main-section">
                <div className="videoplayer">
                  <ReactPlayer url={url} controls height={480} width="100%" />
                </div>
                
                <h4 className="title">{snippet.title}</h4>
                
                <div className="datainfo">
                  <div>{snippet.channelTitle}</div>
                  <div>
                    {formatViews(item.statistics.viewCount)} views • {timestamp}
                  </div>
                </div>

                <div className="icons">
                  <div 
                    onClick={handleLikeVideo}
                    style={{ 
                      color: isLiked ? '#ff0000' : '#606060',
                      fontWeight: isLiked ? '600' : 'normal'
                    }}
                  >
                    {isLiked ? <LikeFilled /> : <LikeOutlined />}
                    {isLiked ? ` Liked (${formatCount(item.statistics.likeCount)})` : ` Like (${formatCount(item.statistics.likeCount)})`}
                  </div>

                  <div onClick={handleShare}>
                    <ShareAltOutlined /> Share
                  </div>

                  <div 
                    onClick={handleWatchLater}
                    style={{ 
                      color: isInWatchLater ? '#ff0000' : '#606060',
                      fontWeight: isInWatchLater ? '600' : 'normal'
                    }}
                  >
                    <FieldTimeOutlined />
                    {isInWatchLater ? ' Saved' : ' Watch Later'}
                  </div>

                  {/* <div>
                    <DownloadOutlined /> Download
                  </div> */}
                </div>

                <div className="description-section">
                  <h4 className="description-title">Description</h4>
                  <div className="description-content">
                    <p>{snippet.description}</p>
                  </div>
                </div>
              </div>

              <div className="upnext-section">
                <h3 className="upnext-title">Up Next</h3>
                <div className="upnext-container">
                  <RecommendedVideos />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Share Popup Modal */}
      {showSharePopup && (
        <div className="share-overlay" onClick={handleCloseShare}>
          <div className="share-popup" onClick={(e) => e.stopPropagation()}>
            <div className="share-header">
              <h3>Share</h3>
              <CloseOutlined onClick={handleCloseShare} style={{ cursor: 'pointer', fontSize: '18px' }} />
            </div>
            
            <div className="share-content">
              <div className="share-icons">
                <div className="share-icon-item" onClick={() => handleSocialShare('facebook')}>
                  <div className="share-icon-circle facebook">
                    <FacebookFilled />
                  </div>
                  <span>Facebook</span>
                </div>

                <div className="share-icon-item" onClick={() => handleSocialShare('twitter')}>
                  <div className="share-icon-circle twitter">
                    <TwitterOutlined />
                  </div>
                  <span>Twitter</span>
                </div>

                <div className="share-icon-item" onClick={() => handleSocialShare('whatsapp')}>
                  <div className="share-icon-circle whatsapp">
                    <WhatsAppOutlined />
                  </div>
                  <span>WhatsApp</span>
                </div>

                <div className="share-icon-item" onClick={() => handleSocialShare('linkedin')}>
                  <div className="share-icon-circle linkedin">
                    <LinkedinFilled />
                  </div>
                  <span>LinkedIn</span>
                </div>

                <div className="share-icon-item" onClick={() => handleSocialShare('email')}>
                  <div className="share-icon-circle email">
                    <MailOutlined />
                  </div>
                  <span>Email</span>
                </div>
              </div>

              <div className="share-link">
                <input 
                  type="text" 
                  value={currentUrl} 
                  readOnly 
                  className="share-link-input"
                />
                <button 
                  onClick={handleCopyLink} 
                  className={`share-copy-btn ${copySuccess ? 'success' : ''}`}
                >
                  {copySuccess ? '✓ Copied' : <><LinkOutlined /> Copy</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
