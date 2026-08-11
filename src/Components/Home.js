import React from 'react';
import '../App.css';
import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
import RecommendedVideos from '../Components/RecommendedVideos';
import { useSidebar } from '../context/SidebarContext';

const Home = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <>
      <Header />
      <div className='content'>
        {isSidebarOpen && (
          <div className='leftsidebar'>
            <SideBar/>
          </div>
        )}
        <RecommendedVideos/>
      </div>
    </>
  )
}

export default Home;
