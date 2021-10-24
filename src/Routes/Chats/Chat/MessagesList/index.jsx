import styles from './MessagesList.module.css'
import {Box} from '@material-ui/core'

/**
 * Презентационный компонент отрисовки списка сообщений в чате
 * @param {Object} messages - объект со списком сообщений активного чата
 * @returns {JSX.Element}
 * @constructor
 */
export const MessagesList = ({messages}) => {

    return <Box className={styles.messages_list}>
      {Object.values(messages).map(
          ({msgTime, msgAuthor, msgText}) =>
              <p key={msgTime + msgAuthor} >{msgAuthor} ({new Date(msgTime).toISOString()}): {msgText}</p>
      )}
    </Box>
}