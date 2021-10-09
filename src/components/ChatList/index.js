import { Box, Button, Link, List, ListItem } from '@material-ui/core'
import PropTypes from 'prop-types'
import { MessageListTypes } from '../MessageList'
import { Link as RouterLink } from 'react-router-dom'
import styles from './ChatList.module.css'

export const ChatList = ({chatList, onAddNewChat, onRemoveChat}) => {

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {chatList.map(({chatId, chatName}) =>
            <ListItem disablePadding key={chatId+chatName} className={styles.chat}>
              <Link
                component={RouterLink}
                color="inherit"
                variant="body2"
                to={`/chats/${chatId}`}
              >
                {chatName}
              </Link>
              <Button size='small' variant="contained" onClick={() => onRemoveChat(chatId)}>X</Button>
            </ListItem>
          )}
        </List>
      </nav>
      <Button variant="contained" onClick={onAddNewChat}>Add new chat</Button>
    </Box>
  );
}

ChatList.propTypes = {
  chatList: PropTypes.arrayOf(PropTypes.shape({
    chatId: PropTypes.number.isRequired,
    chatName: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape(MessageListTypes))
  })),
  onAddNewChat: PropTypes.func.isRequired,
  onRemoveChat: PropTypes.func.isRequired
}