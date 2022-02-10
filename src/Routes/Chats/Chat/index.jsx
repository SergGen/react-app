import { MessagesList } from './MessagesList';
import { SendMessageForm } from './SendMessageForm';
import {Box, Typography} from '@mui/material';
import {useParams} from "react-router-dom";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getChat} from "../../../store/chats/chatsPart/selectors";
import {getMessages} from "../../../store/chats/messagesPart/selectors";
import {useCallback, useEffect, useRef} from "react";
import {getBotAnswer, getBotId, getBotName, getUserId, getUserName} from "../../../store/profile/selectors";
import {catchCurrentTextDraft} from "../../../store/chats/chatsPart/slice";
import {sendMessageThunk} from "../../../store/chats/messagesPart/extraReducer";

/**
 * Компонент-контейнер отрисовки поля активного чата
 * @returns {JSX.Element}
 * @constructor
 */
export const Chat = () => {
    let {chatId} = useParams();
    const messages = useSelector(getMessages(chatId), shallowEqual);
    const dispatch = useDispatch();
    const areaInput = useRef(null);
    const chat = useSelector(getChat(chatId), shallowEqual);
    const userCurrentName = useSelector(getUserName, shallowEqual);
    const userId = useSelector(getUserId,shallowEqual);
    const botCurrentName = useSelector(getBotName, shallowEqual);
    const botCurrentAnswer = useSelector(getBotAnswer, shallowEqual);
    const botId = useSelector(getBotId, shallowEqual);
    /**
     * Функция для запоминания черновика
     * @param event событие ввода текста
     */
    const onCatchText = useCallback( (event) => {
        dispatch(catchCurrentTextDraft({chatId, currentTextDraft: event.target.value}));
    },[chatId, dispatch]);
    /**
     * Хук установки фокуса на поле ввода текста
     */
    useEffect(() => {
        areaInput.current?.focus();
    },[]);
    /**
     * Обработчик отправки введённого сообщения
     * @param event событие начала отправки по клику мыши или нажатию клавиш клавиатуры
     */
    const sendHandler = useCallback( (event) => {
        if(event._reactName === "onClick" || (event.ctrlKey === true && event.code === "Enter")) {
            if(chat.currentTextDraft.trim() !== '') {
                dispatch(sendMessageThunk({
                    chatId,
                    botMsgData: { botId, botCurrentName, botCurrentAnswer },
                    newMsgData: { id: userId, author: userCurrentName, text: chat.currentTextDraft.trim() }
                }));
            }
            dispatch(catchCurrentTextDraft({chatId, currentTextDraft: ''}));
            areaInput.current.focus();
        }
    },[botCurrentAnswer, botCurrentName, botId, chat?.currentTextDraft, chatId, dispatch, userCurrentName, userId]);

  return (
    <Box maxWidth="sm">
        {chat?.chatName ? <Typography variant="h5">{chat?.chatName}</Typography> :
            <Typography variant="h4">Add or choose chat</Typography>}
      <SendMessageForm chat={chat} onCatchText={onCatchText} sendHandler={sendHandler} areaInput={areaInput} />
      <MessagesList messages={messages} />
    </Box>
  );
}