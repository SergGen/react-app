import { Box, Button, List, ListItem } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import styles from './ChatsList.module.css';
import {useDispatch} from "react-redux";
import {addChatPart, deleteChatPart} from "../../../store/chats/chatsPart/slice";
import {addMessagesPart, deleteMessagesPart} from "../../../store/chats/messagesPart/slice";
import {useCallback} from "react";
import PropTypes from "prop-types";
import CloseIcon from '@mui/icons-material/Close';

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
  const addChatHandler = useCallback( () => {
      let timeCreate = Date.now();
      dispatch(addChatPart({timeCreate}));
      dispatch(addMessagesPart({timeCreate}))
  }, [dispatch]);
    /**
     * Функция удаления чата
     * @param {string} chatKey идентификатор удаляемого чата
     * @returns {(function(): void)|*}
     */
  const deleteChatHandler = useCallback( (chatKey) => () => {
      dispatch(deleteChatPart({chatKey}));
      dispatch(deleteMessagesPart({chatKey}));
  },[dispatch]);
      return (
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {Object.keys(chatsList).length > 0 ?
                  <nav aria-label="secondary mailbox folders">
                      <List>
                          {Object.keys(chatsList).map((chatKey) =>
                              <ListItem disablePadding key={chatKey} className={styles.chat}>
                                  {chatKey === chatId ? <Button
                                          component={RouterLink}
                                          color="#DC143C"
                                          variant="string"
                                          fullWidth
                                          size='small'
                                          to={`/chats/${chatKey}`}
                                      >
                                          {chatsList[chatKey].chatName}
                                      </Button> :
                                      <Button
                                          component={RouterLink}
                                          color="inherit"
                                          variant="string"
                                          size='small'
                                          fullWidth
                                          to={`/chats/${chatKey}`}
                                      >
                                          {chatsList[chatKey].chatName}
                                      </Button>
                                  }
                                  <Button
                                      size='small'
                                      variant="contained"
                                      onClick={deleteChatHandler(chatKey)}
                                  >
                                      <CloseIcon />
                                  </Button>
                              </ListItem>
                          )}
                      </List>
                  </nav>
                  : ''}
              <Button variant="text" fullWidth onClick={addChatHandler}>Add new chat</Button>
          </Box>
      );
}

ChatsList.propTypes = {
  chatsList: PropTypes.objectOf(PropTypes.shape({
    chatName: PropTypes.string.isRequired,
    currentTextDraft: PropTypes.string.isRequired,
  })),
  chatId: PropTypes.string
}