import React from 'react'

function SidebarOption({title, Icon}) {
  return (
    <div className='sidebarOption'>
        
    
    {Icon && <Icon className="sidebarOption__icon"/>}
    {Icon?<h4>{title}</h4> : <p>{title}</p>}
    

    <strong className="sidebar__title">PLAYLISTS</strong>
    <hr/>
    </div>
  );
}

export default SidebarOption;