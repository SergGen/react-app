import { MessagesList } from './MessagesList'
import { SendMessageForm } from './SendMessageForm'
import { Box } from '@material-ui/core'
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
      <h3>{chat.chatName}</h3>
      <SendMessageForm />
      <MessagesList messages={messages} />
    </Box>
  );
}