import React from 'react';
import defaultAvatar from './default-avatar.png';
import Styles from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div>
      <img src={defaultAvatar} alt="" width="32" className={Styles.img} />
    </div>
  );
};

export default UserMenu;
