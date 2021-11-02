import { Toolbar, AppBar, Container, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import {CHATS_PATH, GISTS_PATH, HOME_PATH, PROFILE_PATH} from "../../Routes/Routes";
import {useCallback} from "react";

/**
 * Компонент header
 * @returns {JSX.Element}
 * @constructor
 */
export const Header = () => {
    let {pathname} = useLocation();

    const menu = [
        { name: 'HOME', path: HOME_PATH, regexp: new RegExp(`^${HOME_PATH}$`, 'i') },
        { name: 'PROFILE', path: PROFILE_PATH, regexp: new RegExp(`^${PROFILE_PATH}$`, 'i') },
        { name: 'CHATS', path: CHATS_PATH, regexp: new RegExp(`^${CHATS_PATH}`, 'i') },
        { name: 'GISTS', path: GISTS_PATH, regexp: new RegExp(`^${GISTS_PATH}$`, 'i') }
    ];
    
    const checkSelect = useCallback( regexp => regexp.test(pathname), [pathname]);
    
  return (
      <AppBar position="static" sx={{mb: '20px', backgroundColor: 'lightblue'}}>
        <Container>
          <Toolbar component="nav" variant="dense">
            <List sx={{display: 'flex'}}>
              {menu.map(({name, path, regexp}, index) =>
                <ListItem key={index} sx={{mr: '15px'}}>
                  <ListItemButton component={RouterLink} selected={checkSelect(regexp)} size="large" to={path}>
                    <ListItemText>{name}</ListItemText>
                  </ListItemButton>
                </ListItem>
              )}
            </List>
          </Toolbar>
        </Container>
      </AppBar>
  );
}