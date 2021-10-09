import { Box, Grid } from '@material-ui/core'
import { ChatList } from '../../components/ChatList'
import { Chat } from '../../components/Chat'
import { useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import { NotFound } from '../NotFound'

export const Chats = () => {
  let {chatId} = useParams();
  const [chatList, setChatList] = useState([{chatId: Date.now(), chatName: 'Chat 1', messages: []}]);

  let onAddNewChat = () => {
    setChatList([...chatList, {chatId: Date.now(), chatName: 'Chat '+ (1 + chatList.length), messages: []}]);
  }

  let onRemoveChat = (removedChat) => {
    if (chatList.length > 1) {
      setChatList([...chatList.filter(chat => chat.chatId !== removedChat)]);
    }
  }

  let onUpdateChat = (updatedChat) => {
    setChatList([updatedChat,...chatList.filter(chat => chat.chatId !== updatedChat.chatId)]);
  }
  if(chatId && !chatList.find(chat => chat.chatId === Number(chatId))){
    return (
      <Route path="*" component={NotFound} />
    )
  }
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <ChatList chatList={chatList} onAddNewChat={onAddNewChat} onRemoveChat={onRemoveChat} />
        </Grid>
        <Grid item xs={10}>
          <Chat chatId={chatId} chatList={chatList} onUpdateChat={onUpdateChat} />
        </Grid>
      </Grid>
    </Box>
  );
};