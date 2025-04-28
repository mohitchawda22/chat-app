import React, { useState } from 'react';

function ChatWindow({ username, currentUserId, message, setMessage }) {
    const [input, setInput] = useState('')

    const handleSend = () => {
        if (input.trim() === '') return;
        const newMessage = {
            text: input,
            sender: currentUserId,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
        setMessage([...message, newMessage])
        setInput('')
    }

    const handleKeySend = (e) => {
        if (e.key === "Enter") {
            handleSend()
        }
    }

    return (
        <div className="chat-window">
            <div className="chat-header">
                <div className="chat-username">{username}</div>
            </div>
            <div className="chat-body">
                {message?.map((msg, index) => (
                    <div key={index}
                        className={`message ${msg.sender === currentUserId ? "sent" : "received"}`}>
                        {msg.text}
                        <div className='timestamp'>{msg.timestamp}</div>
                    </div>
                ))}
            </div>

            <div className="chat-footer">
                <input type="text" placeholder="Type a message..." value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeySend} />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default ChatWindow;
