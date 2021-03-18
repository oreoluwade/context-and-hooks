import React, { useEffect, useState } from 'react';
import { getUserList } from '../services';

const UserList = () => {
  const [list, setList] = useState([{}]);
  useEffect(() => {
    getUserList().then(res => {
      setList(res);
    });
  }, []);

  return (
    <div className="user-list">
      <h1>USERS</h1>
      {list.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
