import {useEffect, useRef} from 'react'
import { Button, TextareaAutosize } from '@material-ui/core'
import styles from './SendMessageForm.module.css'
import {catchCurrentTextDraft} from "../../../../store/chats/chatsPart/slice";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getChat} from "../../../../store/chats/chatsPart/selectors";
import {sendMessageThunk} from "../../../../store/chats/messagesPart/extraReducer";
import {getBotAnswer, getBotName, getUserName} from "../../../../store/profile/selectors";

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
  let botCurrentName = useSelector(getBotName, shallowEqual);
  let botCurrentAnswer = useSelector(getBotAnswer, shallowEqual)
  /**
   * Функция для запоминания черновика
   * @param event событие ввода текста
   */
  const onCatchText = (event) => {
    dispatch(catchCurrentTextDraft({chatId, currentTextDraft: event.target.value}));
  }
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
  const sendHandler = (event) => {
    if((event._reactName === "onClick" && event.target.dataset.key === 'send_msg') ||
        (event.ctrlKey === true && event.code === "Enter")) {
      if(chat.currentTextDraft.trim() !== '') {
        dispatch(sendMessageThunk({
          chatId,
          botCurrentName,
          botCurrentAnswer,
          newMsgData: {
            author: userCurrentName,
            text: chat.currentTextDraft.trim()
          }
        }));
      }
      dispatch(catchCurrentTextDraft({chatId, currentTextDraft: ''}));
    }
  }

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