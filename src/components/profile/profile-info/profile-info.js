import React from 'react';
import s from './profile-info.module.css';


const ProfileInfo = () => {
  return (
    <div >
        <div className={s.mainImage}>
          <img src="#" alt=""/>
        </div>

        <div className={s.avatar}>
           <img src="https://www.primorsky.ru/upload/iblock/18a/18a627349bd3b1e686b2c9a193c9a3e4.jpg" alt=""/>
            Description
        </div>
    </div>
  )
}

export default ProfileInfo;