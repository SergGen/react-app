import {Toolbar, Button} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Header.module.css';

/**
 * Компонент header
 * @returns {JSX.Element}
 * @constructor
 */
export const Header = () => {

  return (
    <Toolbar component="nav" variant="dense" className={styles.header} >
      <Button
        component={RouterLink}
        color="inherit"
        key="home"
        variant="body2"
        to="/"
        className={styles.link}
      >
        Home
      </Button>
      <Button
        component={RouterLink}
        color="inherit"
        key="profile"
        variant="body2"
        to="/profile"
        className={styles.link}
      >
        Profile
      </Button>
      <Button
        component={RouterLink}
        color="inherit"
        key="chats"
        variant="body2"
        underline="none"
        to="/chats"
        className={styles.link}
      >
        Chats
      </Button>
    </Toolbar>
  );
}