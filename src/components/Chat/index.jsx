import PropTypes from 'prop-types'
import {useState, useEffect} from 'react'
import { RenderList, RenderListTypes } from '../RenderList'
import { Messages } from '../Messages'
import { Container } from '@material-ui/core'

export const Chat = ({chat, onUpdateChat}) => {

  const [incomingChat, setIncomingChat] = useState( chat || {});

  useEffect(() => { setIncomingChat(chat) }, [chat])

  let onSubmit = (formState) => {
    setIncomingChat({id: incomingChat.id, name: incomingChat.name, messages: [...incomingChat.messages, {author: 'You', text: formState, time: Date.now()}]});
  }

  useEffect(() => {
    if(incomingChat.messages.length > 0 && incomingChat.messages[incomingChat.messages.length - 1].author !== 'Bot'){
      setTimeout(() => {setIncomingChat({id: incomingChat.id, name: incomingChat.name, messages: [...incomingChat.messages, {author: 'Bot', text: `Hi! I\`m a bot.`, time: Date.now()}]})}, 1500)
    }
    onUpdateChat(incomingChat);
  }, [incomingChat]);

  return (
    <Container maxWidth="sm">
      <Messages onSubmit={onSubmit} />
      <RenderList messageList={incomingChat.messages} />
    </Container>
  );
}

Chat.propTypes = {
  chat: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    messages: PropTypes.arrayOf(PropTypes.shape(RenderListTypes))
  }),
  onUpdatedChat: PropTypes.func
}