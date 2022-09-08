import React from 'react';
import '../App.css';
import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
import RecommendedVideos from '../Components/RecommendedVideos';

const Home = () => {
  return (
    <>
      <Header />
      <div className='content'>
      <SideBar/>
      <RecommendedVideos/>
      </div>
      </>
  )
}

export default Home