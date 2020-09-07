import React from 'react';

import {NavLink} from 'react-router-dom'

import s from '../dialogs.module.css'




const DialogItem = ({name, id}) => {
  return (
    <div className={s.dialog + ' '+s.active}>
      <NavLink to={"./dialogs/" + id }> {name} </NavLink>
    </div>
  )
}

export default DialogItem;