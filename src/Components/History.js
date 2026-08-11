import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header";
import { DeleteOutlined } from "@ant-design/icons";
import SideBar from "./SideBar";
import { DeleteVideo, RemoveHistoryVideos } from "../Actions";
import { DateTime } from "luxon";
import { useSidebar } from "../context/SidebarContext";
import "../App.css";

const History = () => {
  const H_selector = useSelector((state) => state?.H_reducer?.historylist);
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
          {H_selector && H_selector.length > 0 ? (
            <>
              <div className="page-header">
                <h2>Watch History</h2>
                <button
                  className="btn btn-clear"
                  onClick={() => dispatch(RemoveHistoryVideos())}
                >
                  Clear All History
                </button>
              </div>
              <div className="videocard">
                {H_selector.map((video) => {
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
                          onClick={() => dispatch(DeleteVideo(video))}
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
              <h3>No videos in history</h3>
              <p>Videos you watch will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
