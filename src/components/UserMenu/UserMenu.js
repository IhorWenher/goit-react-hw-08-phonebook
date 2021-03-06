import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './avatar.png';
import { Button } from 'react-bootstrap';

import Styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={Styles.container}>
      <img src={defaultAvatar} alt="" width="32" className={Styles.img} />
      <span className={Styles.name}>Hello, {name}!</span>
      <Button
        variant="primary"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        className={Styles.button}
      >
        Exit
      </Button>{' '}
    </div>
  );
};

export default UserMenu;
