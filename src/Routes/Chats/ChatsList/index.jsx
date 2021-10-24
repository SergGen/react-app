import { Box, Button, Link, List, ListItem } from '@material-ui/core'
import {Link as RouterLink} from 'react-router-dom'
import styles from './ChatsList.module.css'
import {useDispatch} from "react-redux";
import {addChatPart, deleteChatPart} from "../../../store/chats/chatsPart/slice";
import {addMessagesPart, deleteMessagesPart} from "../../../store/chats/messagesPart/slice";

/**
 * Презентационный компонент отрисовки списка чатов
 * @param {string} chatId - идентификатор активного чата
 * @param {Object} chatsList - объект со списком имён чатов
 * @returns {JSX.Element}
 * @constructor
 */
export const ChatsList = ({chatId, chatsList}) => {
  const dispatch = useDispatch();

    /**
     * Функция добавления нового чата
     */
  const addChatHandler = () => {
      let timeCreate = Date.now();
      dispatch(addChatPart({timeCreate}));
      dispatch(addMessagesPart({timeCreate}))
  }
    /**
     * Функция удаления чата
     * @param {string} chatKey идентификатор удаляемого чата
     * @returns {(function(): void)|*}
     */
  const deleteChatHandler = (chatKey) => () => {
      dispatch(deleteChatPart({chatKey}));
      dispatch(deleteMessagesPart({chatKey}));
  }
      return (
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {Object.keys(chatsList).length > 0 ?
                  <nav aria-label="secondary mailbox folders">
                      <List>
                          {Object.keys(chatsList).map((chatKey) =>
                              <ListItem disablePadding key={chatKey} className={styles.chat}>
                                  {chatKey === chatId ? <Link
                                          component={RouterLink}
                                          color="#DC143C"
                                          variant="body2"
                                          to={`/chats/${chatKey}`}
                                      >
                                          {chatsList[chatKey].chatName}
                                      </Link> :
                                      <Link
                                          component={RouterLink}
                                          color="inherit"
                                          variant="body2"
                                          to={`/chats/${chatKey}`}
                                      >
                                          {chatsList[chatKey].chatName}
                                      </Link>
                                  }
                                  <Button size='small' variant="contained" onClick={deleteChatHandler(chatKey)}>X</Button>
                              </ListItem>
                          )}
                      </List>
                  </nav>
                  : ''}
              <Button variant="contained" onClick={addChatHandler}>Add new chat</Button>
          </Box>
      );
}