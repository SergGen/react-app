import { Box, Button, Link, List, ListItem } from '@material-ui/core'
import {Link as RouterLink, useParams} from 'react-router-dom'
import styles from './ChatList.module.css'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getChats} from "../../../store/chats/selectors";
import {addChat, deleteChat} from "../../../store/chats/slices";

export const ChatList = () => {
  const dispatch = useDispatch();
  const chatsObj = useSelector(getChats, shallowEqual);
  let {chatId} = useParams();
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {Object.keys(chatsObj).length > 0 ?
                <nav aria-label="secondary mailbox folders">
                    <List>
                        {Object.keys(chatsObj).map((key) =>
                            <ListItem disablePadding key={key} className={styles.chat}>
                                {key === chatId ? <Link
                                        component={RouterLink}
                                        color="#DC143C"
                                        variant="body2"
                                        to={`/chats/${key}`}
                                    >
                                        {chatsObj[key].nameChat}
                                    </Link> :
                                    <Link
                                        component={RouterLink}
                                        color="inherit"
                                        variant="body2"
                                        to={`/chats/${key}`}
                                    >
                                        {chatsObj[key].nameChat}
                                    </Link>
                                }
                                <Button size='small' variant="contained" onClick={()=>dispatch(deleteChat(key))}>X</Button>
                            </ListItem>
                        )}
                    </List>
                </nav>
                : ''}
            <Button variant="contained" onClick={()=>dispatch(addChat())}>Add new chat</Button>
        </Box>
    );
}