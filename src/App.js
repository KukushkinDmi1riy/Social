import React from 'react';

import './App.css';
import Header from './components/header';
import Nav from './components/sidebar/nav';
import Profile from './components/profile';
import Dialogs from './components/dialogs';

import {Route, BrowserRouter} from 'react-router-dom';
import News from './components/news';
import Music from './components/music';
import Setting from './components/setting/setting';
import Sidebar from './components/sidebar';


function App( {state:
        {profilePage:
            {postData},
        messagePage:
            {dialogData, messageData},
        sidebar: {friends}}}) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Sidebar friends={friends}/>

        <div className="app-wrapper-content">
          {/* <Route exact path="/dialogs" component={Dialogs}/>
          <Route path="/profile" component={Profile}/> */}
          <Route exact path="/dialogs" render = {
                ()=><Dialogs
                dialogData={dialogData}
                messageData={messageData}/>}/>
          <Route path="/profile" render = {()=><Profile postData={postData}/>}/>

          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/setting" component={Setting}/>
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
