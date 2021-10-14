import { Box, Grid } from '@material-ui/core'
import { ChatList } from './ChatList'
import { Chat } from './Chat'
import {Redirect, useParams} from 'react-router-dom'
import {shallowEqual, useSelector} from "react-redux";
import {getChats} from "../../store/chats/selectors";

export const Chats = () => {
  let {chatId} = useParams();
  const chatsObj = useSelector(getChats, shallowEqual);

  if(chatId && !Object.keys(chatsObj).find(chat => chat === chatId)){
    return (
        <Redirect to="/chats" />
    )
  }
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <ChatList />
        </Grid>
        <Grid item xs={10}>
          {chatId ? <Chat /> : <Box><h1>Add or Choose chat</h1></Box>}
        </Grid>
      </Grid>
    </Box>
  );
};