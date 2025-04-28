import React from 'react';

function Sidebar({ currentUserId, users }) {
  const filteredUsers = users.filter(user => user.id !== currentUserId);

  return (
    <div className="sidebar">
      {filteredUsers.map(user => (
        <div key={user.id} className="user">
          <span className="avatar">{user.avatar}</span>
          <span className="name">{user.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
