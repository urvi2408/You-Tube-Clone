import React from 'react';
import SideBarRow from './SideBarRow';
import '../App.css';
import {HomeOutlined,FireOutlined,YoutubeOutlined,HistoryOutlined,PlaySquareOutlined,DownloadOutlined,FieldTimeOutlined,LikeOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <Link to="/home">
            <SideBarRow selected Icon={HomeOutlined } title='Home' />
            </Link>
            <SideBarRow Icon={FireOutlined } title='Trending' />
            <SideBarRow Icon={YoutubeOutlined} title='Subscription' />
            <hr/>
            <SideBarRow Icon={PlaySquareOutlined} title='Library' />
            <Link to="/history">
            <SideBarRow Icon={HistoryOutlined} title='History' />
            </Link>
            <SideBarRow Icon={DownloadOutlined } title='Your videos' />
            <Link to="/watchlater">
            <SideBarRow Icon={FieldTimeOutlined } title='Watch later' />
            </Link>
            <Link to="/likevideo">
            <SideBarRow Icon={LikeOutlined } title='Liked vides' />
            </Link>
        </div>
    );
}

export default SideBar;