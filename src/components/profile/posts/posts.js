import React from 'react';
import Post from './post';

import s from './posts.module.css';


const Posts = ({postData}) => {

  // const postData = [
  //   {id:1, text: "Hi every", likecount: 2},
  //   {id:2, text: "Hisfsf sdcsfevery", likecount:45}
  // ]

  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea>  </textarea>
      </div>

      <div>
        <button>Submit</button>
      </div>

    <div className={s.posts}>

      {postData.map((p)=> {
        return <Post text = {p.text} likescount = {p.likecount}/>
      })}
    </div>
    </div>

  )
}

export default Posts;