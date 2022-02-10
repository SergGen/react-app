import { Toolbar, AppBar, Container } from '@mui/material';
import {CHATS_PATH, GISTS_PATH, HOME_PATH, PROFILE_PATH} from "../../Routes/RoutesBlock";
import {useCallback} from "react";
import { signOut } from "firebase/auth";
import {auth} from "../../services/firebase";
import {shallowEqual, useSelector} from "react-redux";
import {getUserAuth} from "../../store/profile/selectors";
import {LoginStatus} from "./LoginStatus";
import {MenuItems} from "./MenuItems";

/**
 * Компонент-контейнер header
 * @returns {JSX.Element}
 * @constructor
 */
export const Header = () => {
    const userAuthEmail = useSelector(getUserAuth, shallowEqual);
    const menu = [
        { name: 'HOME', path: HOME_PATH, linkMatch: true },
        { name: 'PROFILE', path: PROFILE_PATH, linkMatch: true },
        { name: 'CHATS', path: CHATS_PATH, linkMatch: false },
        { name: 'GISTS', path: GISTS_PATH, linkMatch: true }
    ];

    const logoutHandler = useCallback( async () => {
        await signOut(auth);
    }, []);

  return (
      <AppBar position="static" sx={{mb: '20px', backgroundColor: 'lightblue'}}>
        <Container>
          <Toolbar component="nav" variant="dense" sx={{display: 'flex', justifyContent: 'space-between'}}>
              <MenuItems menu={menu} />
              <LoginStatus userAuthEmail={userAuthEmail} logoutHandler={logoutHandler} />
          </Toolbar>
        </Container>
      </AppBar>
  );
}