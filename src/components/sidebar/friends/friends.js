import React from 'react';
import s from './friends.module.css'



const Friends = ({friends}) => {

  return (
      <div className={s.friends}>
        <h1>Friends</h1>
        <div className={s.friendsAvatar}>

            {friends.map((friend)=>{
              return (
                <div>
                <div className={s.photo}></div>
                <span><p className={s.friendNick}>{friend.nickName}</p></span>
              </div>
              )
            })}
            
        </div>
      </div>
  )
}

export default Friends;