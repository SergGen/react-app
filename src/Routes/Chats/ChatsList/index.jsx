import {Box, Button, IconButton, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {addChatPart, deleteChatPart} from "../../../store/chats/chatsPart/slice";
import {addMessagesPart, deleteMessagesPart} from "../../../store/chats/messagesPart/slice";
import {useCallback} from "react";
import PropTypes from "prop-types";
import DeleteIcon from '@mui/icons-material/Close';
import {CHATS_PATH} from "../../RoutesBlock";

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
          <Box component='nav' sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <List>
                  {Object.entries(chatsList).map(([chatKey, chat]) =>
                      <ListItem disablePadding key={chatKey}
                          secondaryAction={
                              <IconButton aria-label="delete" size='small' variant="contained"
                                  onClick={deleteChatHandler(chatKey)}
                              >
                                  <DeleteIcon />
                              </IconButton>
                          }
                      >
                          <ListItemButton component={RouterLink} selected={chatKey === chatId}
                              to={`${CHATS_PATH}/${chatKey}`}
                          >
                              <ListItemText sx={{textAlign: 'center'}} id={chatKey} primary={chat.chatName} />
                          </ListItemButton>
                      </ListItem>
                  )}
              </List>
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