import PropTypes from 'prop-types'
import {useState, useEffect} from 'react'
import { MessageList, MessageListTypes } from '../MessageList'
import { SendMessageForm } from '../SendMessageForm'
import { Box } from '@material-ui/core'

export const Chat = ({ chatId, chatList, onUpdateChat}) => {

  let chat = {}
  if(chatId){
    chat = chatList.find(chat => chat.chatId === Number(chatId));
  } else {
    chat = chatList.slice()[0];
  }

  const [currentChat, setCurrentChat] = useState( chat || {} );

  useEffect(() => { setCurrentChat(chat) }, [chatList])

  let onSubmit = (formState) => {
    setCurrentChat({
      chatId: currentChat.chatId,
      chatName: currentChat.chatName,
      messages: [
        ...currentChat.messages,
        {messageAuthor: 'You', messageText: formState, messageTime: Date.now()}
      ]
    });
  }

  useEffect(() => {
    if(currentChat.messages.length > 0 && currentChat.messages[currentChat.messages.length - 1].messageAuthor !== 'Bot'){
      setTimeout(() => {
        setCurrentChat({
          chatId: currentChat.chatId,
          chatName: currentChat.chatName,
          messages: [
            ...currentChat.messages,
            {messageAuthor: 'Bot', messageText: `Hi! I\`m a bot.`, messageTime: Date.now()}
          ]
        })
      }, 1500)
    }
    onUpdateChat(currentChat);
  }, [currentChat]);

  if(!chatId){
    return <Box><h1>Choose chat</h1></Box>
  }
  return (
    <Box maxWidth="sm">
      <SendMessageForm onSubmit={onSubmit} />
      <MessageList messageList={currentChat.messages} />
    </Box>
  );
}


Chat.propTypes = {
  chatList: PropTypes.arrayOf(PropTypes.shape({
    chatId: PropTypes.number.isRequired,
    chatName: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape(MessageListTypes))
  })),
  onUpdateChat: PropTypes.func.isRequired,
  chatId: PropTypes.string
}