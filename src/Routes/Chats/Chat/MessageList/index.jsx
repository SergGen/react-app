import PropTypes from 'prop-types'
import styles from './MessageList.module.css'
import { Box } from '@material-ui/core'

export const MessageList = ({messageList}) => {

  return <Box className={styles.messages_list}>
    {messageList.map(({messageTime, messageAuthor, messageText}) => <p key={messageTime+messageAuthor}>{messageAuthor}: {messageText}</p>)}
  </Box>
}

export const MessageListTypes = {
  messageTime: PropTypes.number.isRequired,
  messageAuthor: PropTypes.string.isRequired,
  messageText: PropTypes.string.isRequired
}

MessageList.propTypes = {
  messageList: PropTypes.arrayOf(PropTypes.shape(MessageListTypes))
}