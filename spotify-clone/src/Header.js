import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from './Datalayer';

function Header() {
    const[{user},dispatch]=useDataLayerValue();

  return (
    <div className='header'>
      <div className= 'header__left'>
<SearchIcon/>
<input placeholder='Search for Artists, Songs, or Playlists' type='text'>

</input>

      </div>
      <div className= 'header__right'>
      <Avatar src={user?.images[0]?.url} alt="US"/>
        <h4>{user?.display_name}</h4>
    </div>

    </div>
  )
}

export default Header
