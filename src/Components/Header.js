import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { useSidebar } from '../context/SidebarContext';
import '../App.css';

function Header() {
  const [inputSearch, setInputSearch] = useState('');
  const navigate = useNavigate();
  const { toggleSidebar } = useSidebar();

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputSearch.trim()) {
      navigate(`/inputSearch/${inputSearch}`);
    }
  };

  return (
    <div className='header'>
      <div className="header__left">
        <MenuOutlined className='header__icon' onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
        <Link to="/">
          <img
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
            alt='YouTube Logo'
          />
        </Link>
      </div>

      <form className="header__center" onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search'
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
        />
        <button type="submit" className='header__searchbutton'>
          <SearchOutlined />
        </button>
      </form>

      <div className="header__right">
        {/* <VideoCameraOutlined className='header__icon' />
        <AppstoreOutlined className='header__icon' />
        <BellOutlined className='header__icon' />
        <UserOutlined className='header__icon' /> */}
      </div>
    </div>
  );
}

export default Header;
