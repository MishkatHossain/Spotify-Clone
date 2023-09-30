 import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from './DataLayer';

// import HomeIcon from "@material-ui/icons/Home"
// import SearchIcon from "@material-ui/icons/Search"
// import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"

import { Home } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { LibraryMusic } from '@mui/icons-material';

function Sidebar() {

  const [{playlists}, dispatch] = useDataLayerValue();


  return (
    <div className='sidebar'>
      <img 
      className='sidebar__logo'
      src="http://getheavy.com/wp-content/
      uploads/2019/12/spotify2019-830x350.jpg" 
      alt=""/>

      <SidebarOption Icon={Home} title="Home"/>
      <SidebarOption Icon={Search} title="Search"/>
      <SidebarOption Icon={LibraryMusic} title="Your Library"/>

      <br/>
      
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr/>

      {playlists?.items?.map(playlists =>(
        <SidebarOption title={playlists.name}/>
      ))}

    </div>
  )
}

export default Sidebar