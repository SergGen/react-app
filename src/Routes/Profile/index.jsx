import {Box, Button, Input, TextareaAutosize} from "@material-ui/core";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getUserName, getBotName, USER_NAME, BOT_NAME, getBotAnswer} from "../../store/profile/selectors";
import {changeBotAnswer, changeName} from "../../store/profile/slices";
import {useState} from "react";

/**
 * Компонет профиля
 * @returns {JSX.Element}
 * @constructor
 */
export const Profile = () => {
    const dispatch = useDispatch();
    let userCurrentName = useSelector(getUserName, shallowEqual);
    let botCurrentName = useSelector(getBotName, shallowEqual);
    let botCurrentAnswer = useSelector(getBotAnswer, shallowEqual)
    let [userName, setUserName] = useState('');
    let [botName, setBotName] = useState('');
    let [botAnswer, setBotAnswer] = useState(botCurrentAnswer);
    let [acceptBotAnswer, setAcceptBotAnswer] = useState(false);
    let [acceptBotName, setAcceptBotName] = useState(false);
    let [acceptUserName, setAcceptUserName] = useState(false);
    /**
     * Изменяет изменяет имя пользователя или бота в зависимости от заданного nameProfile
     * @param {string} nameProfile указатель смены имени
     * @param {string} newName новое имя
     * @returns {(function(): void)|*}
     */
    const onChangeName = (nameProfile, newName) => () => {
        dispatch(changeName({
            nameProfile,
            newName: newName.trim()
        }));
        if(nameProfile === USER_NAME){
            setUserName('');
            setAcceptUserName(true);
        } else {
            setBotName('');
            setAcceptBotName(true);
        }
    }
    /**
     * Изменяет текст ответа бота
     * @param {string} newBotAnswer новый текст ответа бота
     * @returns {(function(): void)|*}
     */
    const onChangeBotAnswer = (newBotAnswer) => () => {
        dispatch(changeBotAnswer({ newBotAnswer: newBotAnswer.trim() }));
        setAcceptBotAnswer(true);
    }
    /**
     * Запоминает введённый текст в строке ввода имени User
     * @param event событие ввода текса
     */
    const changeUserNameHandler = (event) => {
        setUserName(event.target.value);
        setAcceptUserName(false);
    }
    /**
     * Запоминает введённый текст в строке ввода имени Bot
     * @param event событие ввода текса
     */
    const changeBotNameHandler = (event) => {
        setBotName(event.target.value);
        setAcceptBotName(false);
    }
    /**
     * Запоминает введённый текст бота
     * @param event
     */
    const changeBotAnswerHandler = (event) => {
        setBotAnswer(event.target.value);
        setAcceptBotAnswer(false);
    }

    return (
    <Box>
      <h1>Profile</h1>
        <Box>
            <p>User current name - "{userCurrentName}"</p>
            <Input value={userName} onChange={changeUserNameHandler} />
            <Button onClick={onChangeName(USER_NAME, userName)}>Confirm change</Button>
            {acceptUserName ? <span> &#10004;</span> : ''}
        </Box>
        <Box>
            <p>Bot current - "{botCurrentName}"</p>
            <Input value={botName} onChange={changeBotNameHandler} />
            <Button onClick={onChangeName(BOT_NAME, botName)}>Confirm change</Button>
            {acceptBotName ? <span> &#10004;</span> : ''}
        </Box>
        <Box>
            <TextareaAutosize
                aria-label="You"
                placeholder="Write your message here"
                variant="outlined"
                value={botAnswer}
                onChange={changeBotAnswerHandler}
            />
            <Button onClick={onChangeBotAnswer(botAnswer)}>Confirm change</Button>
            {acceptBotAnswer ? <span> &#10004;</span> : ''}
        </Box>
    </Box>
  )
}