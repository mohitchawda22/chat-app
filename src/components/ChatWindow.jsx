import React from 'react';

function ChatWindow({ username }) {
  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-username">{username}</div>
      </div>
      <div className="chat-body">
        <div className="message received">Hi there! 👋</div>
        <div className="message sent">Hello! How are you?</div>
        <div className="message received">I'm good, thanks!</div>
      </div>
      <div className="chat-footer">
        <input type="text" placeholder="Type a message..." disabled />
        <button disabled>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
