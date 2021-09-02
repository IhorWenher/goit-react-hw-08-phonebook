import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './avatar.png';

import Styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <img src={defaultAvatar} alt="" width="32" className={Styles.img} />
      <span className={Styles.name}>Hello, {name}!</span>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        className={Styles.button}
      >
        Exit
      </button>
    </div>
  );
};

export default UserMenu;
