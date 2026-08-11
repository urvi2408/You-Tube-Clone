import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { DateTime } from "luxon";
import { useDispatch } from "react-redux";
import { AddVideo } from "../Actions";
import Header from "./Header";
import SideBar from "./SideBar";
import { useSidebar } from "../context/SidebarContext";
import "../App.css";

const SearchBar = () => {
  const { inputSearch } = useParams();
  const [searchValue, setSearchValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isSidebarOpen } = useSidebar();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&type=video&q=${inputSearch}&key=AIzaSyCAdv84hg9sERDkh6qtL5Vuk-c9bUlI02k`)
      .then(response => {
        setSearchValue(response.data.items);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      })
  }, [inputSearch]);

  const handleVideoClick = (item) => {
    const videoData = {
      id: item.id.videoId,
      snippet: item.snippet,
      statistics: {
        viewCount: "0",
        likeCount: "0"
      },
      player: {
        embedHtml: `https://www.youtube.com/watch?v=${item.id.videoId}`
      }
    };
    dispatch(AddVideo(videoData));
  };

  return (
    <div>
      <Header />
      <div className='content'>
        {isSidebarOpen && (
          <div className='leftsidebar'>
            <SideBar />
          </div>
        )}

        {loading ? (
          <div className="search-loading">
            <p>Searching for "{inputSearch}"...</p>
          </div>
        ) : searchValue && searchValue.length > 0 ? (
          <div className='videos'>
            <div className='videocard'>
              {searchValue.map((item) => {
                const snippet = item.snippet;
                const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
                const videoId = item.id.videoId;

                return (
                  <div className='info' key={videoId}>
                    <Link to={`/${videoId}`}>
                      <img
                        onClick={() => handleVideoClick(item)}
                        className='videocard__image'
                        src={snippet.thumbnails.medium.url}
                        alt={snippet.title}
                      />
                    </Link>
                    <h6>{snippet.title}</h6>
                    <div>{snippet.channelTitle}</div>
                    <div>{timestamp}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="search-no-results">
            <h3>No results found for "{inputSearch}"</h3>
            <p>Try different keywords or check your spelling</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
