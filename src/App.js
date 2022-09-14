import React from 'react';
import './App.css';
import Home from './Components/Home';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Video from './Components/Video';
import {Provider} from "react-redux";
import Store from './Store';
import Watchlater from './Components/WatchLater';
import LikeVideo from './Components/LikeVideo';
import  History  from './Components/History';
import SearchBar from './Components/SearchBar';

function App() {

  return (
  <>
  <Provider store={Store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/:id" element={<Video/>}/>
      <Route path='/inputSearch/:inputSearch' element={<SearchBar/>}/>
      <Route path="/watchlater" element={<Watchlater/>}/>
      <Route path="/likevideo" element={<LikeVideo/>}/>
      <Route path="/history" element={<History/>}/>
    </Routes>
  </BrowserRouter>  
  </Provider>
  </>
  );
}

export default App;