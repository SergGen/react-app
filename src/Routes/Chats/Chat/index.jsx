import { MessagesList } from './MessagesList';
import { SendMessageForm } from './SendMessageForm';
import {Box, Typography} from '@mui/material';
import {useParams} from "react-router-dom";
import {shallowEqual, useSelector} from "react-redux";
import {getChat} from "../../../store/chats/chatsPart/selectors";
import {getMessages} from "../../../store/chats/messagesPart/selectors";

/**
 * Компонент-контейнер отрисовки поля активного чата
 * @returns {JSX.Element}
 * @constructor
 */
export const Chat = () => {
    let {chatId} = useParams();
    const chat = useSelector(getChat(chatId), shallowEqual);
    const messages = useSelector(getMessages(chatId), shallowEqual);

  return (
    <Box maxWidth="sm">
      <Typography variant="h5">{chat.chatName}</Typography>
      <SendMessageForm />
      <MessagesList messages={messages} />
    </Box>
  );
}