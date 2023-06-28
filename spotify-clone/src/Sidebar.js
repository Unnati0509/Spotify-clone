import React from "react";

import './Sidebar.css';
import Sidebaroption from "./Sidebaroption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from "./Datalayer";

function Sidebar(){
    const [{playlists}, dispatch]= useDataLayerValue();
    return(
  
            <div className="sidebar">
               <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            
            <Sidebaroption Icon={HomeIcon} title="Home"/>
            <Sidebaroption Icon={SearchIcon} title="Search"/>
            <Sidebaroption Icon={LibraryMusicIcon} title="Your Library"/>
            
            <br/>
             <strong className="sidebar_title">PLAYLISTS</strong>   
            <hr/>

            {playlists?.items?.map(playlist =>(
                <Sidebaroption title={playlist.name}/>
            ))}
            

            </div>
            
        
    )
}

export default Sidebar;