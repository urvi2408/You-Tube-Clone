import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header";
import { DeleteOutlined } from "@ant-design/icons";
import SideBar from "./SideBar";
import { DeleteLikeVideo, RemoveLikeVideos } from "../Actions";
import { DateTime } from "luxon";
import { useSidebar } from "../context/SidebarContext";
import "../App.css";

const LikeVideo = () => {
  const L_selector = useSelector((state) => state?.L_reducer?.likeVideoList);
  const { isSidebarOpen } = useSidebar();
  const dispatch = useDispatch();

  const formatViews = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count;
  };

  return (
    <div>
      <Header />
      <div className="content">
        {isSidebarOpen && (
          <div className="leftsidebar">
            <SideBar />
          </div>
        )}

        <div className="videos">
          {L_selector && L_selector.length > 0 ? (
            <>
              <div className="page-header">
                <h2>Liked Videos</h2>
                <button
                  className="btn btn-clear"
                  onClick={() => dispatch(RemoveLikeVideos())}
                >
                  Clear All
                </button>
              </div>
              <div className="videocard">
                {L_selector.map((video) => {
                  const snippet = video?.snippet;
                  const timestamp = DateTime.fromISO(snippet?.publishedAt).toRelative();

                  return (
                    <div className="video-card-wrapper" key={video.id}>
                      <div className="info">
                        <Link to={`/${video.id}`}>
                          <img
                            className="videocard__image"
                            src={snippet?.thumbnails?.medium?.url}
                            alt={snippet?.title}
                          />
                        </Link>
                        <div className="video-details">
                          <h6>{snippet?.title}</h6>
                          <div className="video-channel">{snippet?.channelTitle}</div>
                          <div className="video-stats">
                            {formatViews(video?.statistics?.viewCount)} views • {timestamp}
                          </div>
                        </div>
                      </div>
                      <div className="video-action">
                        <DeleteOutlined
                          onClick={() => dispatch(DeleteLikeVideo(video))}
                          className="delete-icon"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <h3>No liked videos</h3>
              <p>Videos you like will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LikeVideo;
