import React from 'react';



import s from '../dialogs.module.css'



const Message = ({message}) => {
  return (
  <div className={s.message}>{message}</div>
  )
}


export default Message;