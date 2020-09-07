import React from 'react';

import Nav from '../sidebar//nav';
import Friends from '../sidebar/friends';

import s from './sidebar.module.css'


const Sidebar = ({friends}) => {
  return (
    <div className={s.sidebar}>
      <Nav/>
      <Friends friends={friends}/>
    </div>

  )
}

export default Sidebar;