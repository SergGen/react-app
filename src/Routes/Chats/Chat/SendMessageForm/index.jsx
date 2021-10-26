import {useCallback, useEffect, useRef} from 'react';
import { Button, TextareaAutosize } from '@mui/material';
import styles from './SendMessageForm.module.css';
import {catchCurrentTextDraft} from "../../../../store/chats/chatsPart/slice";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getChat} from "../../../../store/chats/chatsPart/selectors";
import {sendMessageThunk} from "../../../../store/chats/messagesPart/extraReducer";
import {getBotAnswer, getBotId, getBotName, getUserId, getUserName} from "../../../../store/profile/selectors";

/**
 * Компонент-контейнер отрисовки поля ввода текста сообщения и его отправки
 * @returns {JSX.Element}
 * @constructor
 */
export const SendMessageForm = () => {
  const dispatch = useDispatch();
  let {chatId} = useParams();
  let areaInput = useRef(null);
  const chat = useSelector(getChat(chatId), shallowEqual);
  let userCurrentName = useSelector(getUserName, shallowEqual);
  let userId = useSelector(getUserId,shallowEqual);
  let botCurrentName = useSelector(getBotName, shallowEqual);
  let botCurrentAnswer = useSelector(getBotAnswer, shallowEqual);
  let botId =useSelector(getBotId, shallowEqual);
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
  })
  /**
   * Обработчик отправки введённого сообщения
   * @param event событие начала отправки по клику мыши или нажатию клавиш клавиатуры
   */
  const sendHandler = useCallback( (event) => {
    if((event._reactName === "onClick" && event.target.dataset.key === 'send_msg') ||
        (event.ctrlKey === true && event.code === "Enter")) {
      if(chat.currentTextDraft.trim() !== '') {
        dispatch(sendMessageThunk({
          chatId,
          botMsgData: {
            botId,
            botCurrentName,
            botCurrentAnswer
          },
          newMsgData: {
            id: userId,
            author: userCurrentName,
            text: chat.currentTextDraft.trim()
          }
        }));
      }
      dispatch(catchCurrentTextDraft({chatId, currentTextDraft: ''}));
    }
  },[botCurrentAnswer, botCurrentName, botId, chat.currentTextDraft, chatId, dispatch, userCurrentName, userId]);

  return <form className={styles.message_form} onSubmit={(event) => event.preventDefault()}>
    <TextareaAutosize
      aria-label="You"
      className={styles.area}
      placeholder="Write your message here"
      variant="outlined"
      ref={areaInput}
      value={chat.currentTextDraft}
      onChange={onCatchText} onKeyDown={sendHandler}
    />
    <Button data-key="send_msg" variant="contained" onClick={sendHandler}>Send message</Button>
  </form>
}