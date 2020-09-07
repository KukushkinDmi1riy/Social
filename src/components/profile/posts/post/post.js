import React from 'react';

import s from './post.module.css';

const Post = ({text, likescount}) => {
  return (
    <div>
      <div className = {s.item}>
        <div className = {s.avatar}>
          <img src="https://i.ytimg.com/vi/owXHNDqB3ck/hqdefault.jpg" alt=""/>
          {text}
        </div>
       <div><span> {likescount} like </span></div>
      </div>
    </div>
  )
}

export default Post;