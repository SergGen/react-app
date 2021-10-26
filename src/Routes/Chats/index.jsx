import {Box, Grid, Typography} from '@mui/material';
import { ChatsList } from './ChatsList';
import { Chat } from './Chat';
import {Redirect, useParams} from 'react-router-dom';
import {shallowEqual, useSelector} from 'react-redux';
import {getChatsList} from '../../store/chats/chatsPart/selectors';

/**
 * Компонент-контейнер вкладки с чатами
 * @returns {JSX.Element}
 * @constructor
 */
export const Chats = () => {
  let {chatId} = useParams();
  const chatsList = useSelector(getChatsList, shallowEqual);

  if(chatId && !Object.keys(chatsList).find(chat => chat === chatId)){
    return (
        <Redirect to="/chats" />
    )
  }
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <ChatsList chatsList={chatsList} chatId={chatId} />
        </Grid>
        <Grid item xs={10}>
          {chatId ? <Chat /> : <Box><Typography variant="h3">Add or choose chat</Typography></Box>}
        </Grid>
      </Grid>
    </Box>
  );
};