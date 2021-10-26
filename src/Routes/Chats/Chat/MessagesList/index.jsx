import styles from './MessagesList.module.css';
import {Box, Typography} from '@mui/material';
import PropTypes from "prop-types";

/**
 * Презентационный компонент отрисовки списка сообщений в чате
 * @param {Object} messages - объект со списком сообщений активного чата
 * @returns {JSX.Element}
 * @constructor
 */
export const MessagesList = ({messages}) => {




// Заменить msgAuthor в key на id
    return <Box className={styles.messages_list}>
      {Object.values(messages).map(
          ({msgTime, msgAuthor, msgText}) =>
              <Typography component="p" key={msgTime + msgAuthor} >{msgAuthor} ({new Date(msgTime).toISOString()}): {msgText}</Typography>
      )}
    </Box>
}

MessagesList.propTypes = {
  messages: PropTypes.objectOf(
      PropTypes.shape({
          msgTime: PropTypes.number.isRequired,
          msgAuthor: PropTypes.string.isRequired,
          msgText: PropTypes.string.isRequired
      }
  ))
}