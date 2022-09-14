import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {MenuOutlined,SearchOutlined,VideoCameraOutlined,AppstoreOutlined,BellOutlined,UserOutlined} from '@ant-design/icons'
import '../App.css';

function Header () {

  const [inputSearch, setInputSearch] = useState('');
  console.log(inputSearch);

    return (
        <div className='header'>
          <div className="header__left">
            <MenuOutlined className='header__icon'/> 
            <Link to="/">
              <img 
                className='header__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                alt='#'
              />
            </Link>
          </div>
          
          <div className="header__center">
            <input type='text' 
                   placeholder='Search' 
                   onChange={(e) => setInputSearch(e.target.value)}
                   value={inputSearch}
            />
            <Link to={`/inputSearch/${inputSearch}`}>
              <SearchOutlined  className='header__searchbutton'/>
            </Link>
          </div>

          <div className="header__right">
            <VideoCameraOutlined  className='header__icon'/>
            <AppstoreOutlined  className='header__icon'/>
            <BellOutlined   className='header__icon'/>
            <UserOutlined />
          </div>
        </div>
    );
}

export default Header;