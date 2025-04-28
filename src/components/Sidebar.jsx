import React from 'react';

function Sidebar({ currentUserId, users }) {
    const filteredUsers = users.filter(user => user.id !== `${currentUserId}`);

    return (
        <div className="sidebar">
            <h3 className=''>Chats</h3>
            {filteredUsers?.map(user => (
                <div key={user.id} className='user'>
                    <img src={user.avatar} alt="avatar" className="avatar-img" />
                    <span className="name">{user.name}</span>
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
