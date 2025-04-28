import React from 'react';
import { USERS } from './data/data';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  const currentUser1 = USERS[0];
  const currentUser2 = USERS[1]; 

  return (
    <div className="app-container">
      <div className="chat-app">
        <div className="app-header">{currentUser1.name}'s Chat</div>
        <div className="main-content">
          <Sidebar currentUserId={currentUser1.id} users={USERS} />
          <ChatWindow username="Select a user" />
        </div>
      </div>

      <div className="chat-app">
        <div className="app-header">{currentUser2.name}'s Chat</div>
        <div className="main-content">
          <Sidebar currentUserId={currentUser2.id} users={USERS} />
          <ChatWindow username="Select a user" />
        </div>
      </div>
    </div>
  );
}

export default App;
