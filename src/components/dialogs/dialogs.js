import React from 'react';
import DialogItem from './dialog-item';
import Message from './message'

import s from './dialogs.module.css'



const Dialogs = ({dialogData,messageData}) => {

  // let dialogData = [
  //   {id:1, name: 'Harry'},
  //   {id:2, name: 'Ron'},
  //   {id:3, name: 'Elena'},
  //   {id:4, name: 'Kate'}
  // ];

  // let messageData = [
  //   {id:1, message: 'Hi'},
  //   {id:2, message: 'How is your deal?'},
  //   {id:3, message: 'Hello everybody!'},
  //   {id:4, message: 'Yo, man!'}
  // ]


  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>

        {dialogData.map( item =>{
          return  <DialogItem name={item.name} id={item.id}/>
        })}

      </div>
      <div  className={s.messages}>

        {messageData.map((item)=>{
          return <Message message={item.message}/>
        })}

      </div>
    </div>
  )
}


export default Dialogs;