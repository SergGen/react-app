import styles from './MessageList.module.css'
import { Box } from '@material-ui/core'
import {shallowEqual, useSelector} from "react-redux";
import {getChats} from "../../../../store/chats/selectors";
import {useParams} from "react-router-dom";

export const MessageList = () => {
  let {chatId} = useParams();
  const chatsObj = useSelector(getChats, shallowEqual);
  return <Box className={styles.messages_list}>
    {chatsObj[chatId].messages.map(
        ({msgTime, msgAuthor, msgText}) => <p key={msgTime+msgAuthor}>{msgAuthor}: {msgText}</p>
    )}
  </Box>
}