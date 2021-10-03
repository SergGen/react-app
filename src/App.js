import './App.css';
import { Chat } from './components/Chat'
import { useState } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import {ChatList} from './components/ChatList'

function App() {

  const [chatList, setChatList] = useState([{id: 'xxx', name: 'Some chat', messages: []}]);

  let onAddNewChat = (newChat) => {
    setChatList([...chatList, newChat]);
  }

  let onUpdateChat = (updatedChat) => {
    setChatList([updatedChat,...chatList.filter(chat => chat.id !== updatedChat.id)]);
  }

  return (
    <>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ChatList chatList={chatList} />
        </Grid>
        <Grid item xs={8}>
          <Chat chat={chatList[0]} onUpdateChat={onUpdateChat} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;