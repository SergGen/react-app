import { Toolbar, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Header.module.css'

/**
 * Компонент header
 * @returns {JSX.Element}
 * @constructor
 */
export const Header = () => {

  return (
    <Toolbar component="nav" variant="dense" className={styles.header} >
      <Link
        component={RouterLink}
        color="inherit"
        noWrap
        key="home"
        variant="body2"
        to="/"
        className={styles.link}
      >
        Home
      </Link>
      <Link
        component={RouterLink}
        color="inherit"
        noWrap
        key="profile"
        variant="body2"
        to="/profile"
        className={styles.link}
      >
        Profile
      </Link>
      <Link
        component={RouterLink}
        color="inherit"
        noWrap
        key="chats"
        variant="body2"
        to="/chats"
        className={styles.link}
      >
        Chats
      </Link>
    </Toolbar>
  );
}