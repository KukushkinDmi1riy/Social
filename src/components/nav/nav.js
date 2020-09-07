import React from 'react';
import s from './nav.module.css'

import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div className={s.sidebar}>
      <nav className = {s.nav}>
          <div className = {s['nav-content']}>
            <NavLink to="/profile" activeClassName={s.activeLink}> Profile</NavLink>
          </div>
          <div className = {s['nav-content']}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}> Messages</NavLink>
          </div>
          <div className = {s['nav-content']}>
            <NavLink to="/news" activeClassName={s.activeLink}> News</NavLink>
          </div>
          <div className = {s['nav-content']}>
            <NavLink to="/music" activeClassName={s.activeLink}> Music</NavLink>
          </div>
          <div className = {s['nav-content']}>
            <NavLink to="/setting" activeClassName={s.activeLink}> Settings</NavLink>
          </div>
        </nav>

      <div className={s.friends}>
        <h1>Friends</h1>
        <div className={s.friendsAvatar}>

          <div>
            <div className={s.photo}></div>
            <sapn>Andrew</sapn>
          </div>

          <div>
            <div className={s.photo}></div>
            <sapn>Andrew</sapn>
          </div>
          <div>
            <div className={s.photo}></div>
            <sapn>Andrew</sapn>
          </div>
        </div>
      </div>

      </div>

  )
}

export default Nav;