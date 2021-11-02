import {Box, Grid, Typography} from '@mui/material';
import { ChatsList } from './ChatsList';
import { Chat } from './Chat';
import {Redirect, useParams} from 'react-router-dom';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getChatsList} from '../../store/chats/chatsPart/selectors';
import {ErrorFallback} from "../../components/ErrorFallback";
import {ErrorBoundary} from "react-error-boundary";
import {dropMessagesPart} from "../../store/chats/messagesPart/slice";
import {dropChatsPart} from "../../store/chats/chatsPart/slice";
import {useCallback} from "react";
import {CHATS_PATH} from "../Routes";

/**
 * Компонент-контейнер вкладки с чатами
 * @returns {JSX.Element}
 * @constructor
 */
export const Chats = () => {
  let {chatId} = useParams();
  const chatsList = useSelector(getChatsList, shallowEqual);
  const dispatch = useDispatch();

  /**
   * Функция сброса чатов в случае неустранимой ошибки
   */
  const dropChats = useCallback( () => {
    dispatch(dropMessagesPart);
    dispatch(dropChatsPart);
  }, [dispatch]);
  
  /**
   * Переадресация на домашнюю страницу чатов в случае использования в адресе несуществующего идентификатора чата 
   */
  if(chatId && !Object.keys(chatsList).find(chat => chat === chatId)){
    return (
        <Redirect to={CHATS_PATH} />
    )
  }
  
  return (
    <Box>
      <ErrorBoundary FallbackComponent = {ErrorFallback} onReset={dropChats}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <ChatsList chatsList={chatsList} chatId={chatId} />
          </Grid>
          <Grid item xs={10}>
            {chatId ? <Chat /> : <Box><Typography variant="h4">Add or choose chat</Typography></Box>}
          </Grid>
        </Grid>
      </ErrorBoundary>
    </Box>
  );
};