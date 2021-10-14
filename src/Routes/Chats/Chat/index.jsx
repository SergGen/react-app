import { MessageList } from './MessageList'
import { SendMessageForm } from './SendMessageForm'
import { Box } from '@material-ui/core'
import {useParams} from "react-router-dom";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getChats} from "../../../store/chats/selectors";
import {sendMessage} from "../../../store/chats/slices";
import {useEffect} from "react";

export const Chat = () => {
    let {chatId} = useParams();
    const chatsObj = useSelector(getChats, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
      if(chatsObj[chatId].messages.length > 0 &&
          chatsObj[chatId].messages[chatsObj[chatId].messages.length - 1].msgAuthor !== 'Bot'){
        setTimeout(() => {
            dispatch(sendMessage({
                chatId: chatId,
                msgData: {
                    author: 'Bot',
                    text: `Hi! I\`m a bot.`
                }
            }));
        }, 1500)
      }
    }, [chatsObj]);

  return (
    <Box maxWidth="sm">
      <h3>{chatsObj[chatId].nameChat}</h3>
      <SendMessageForm />
      <MessageList />
    </Box>
  );
}