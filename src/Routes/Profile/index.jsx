import {Box, Button, Input, TextareaAutosize, Typography} from "@mui/material";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {changeBotAnswer, changeName} from "../../store/profile/slices";
import {useCallback, useState} from "react";
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import {
    getUserName, getBotName, getBotAnswer,
    USER_DATA, BOT_DATA,
    BOT_DEFAULT_ANSWER, BOT_DEFAULT_NAME, USER_DEFAULT_NAME
} from "../../store/profile/selectors";
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
     * Изменяет имя пользователя или бота в зависимости от заданного nameProfile
     * @param {string} nameProfile указатель смены имени
     * @param {string} newName новое имя
     * @returns {(function(): void)|*}
     */
    const onChangeName = useCallback( (nameProfile, newName) => () => {
        let updateFlag;
        if(nameProfile === USER_DATA) {
            updateFlag = userCurrentName !== newName.trim();
        } else {
            updateFlag = botCurrentName !== newName.trim();
        }
        if (newName.trim() !== '' && updateFlag) {
            dispatch(changeName({
                nameProfile,
                newName: newName.trim()
            }));
            if (nameProfile === USER_DATA) {
                setUserName('');
                setAcceptUserName(true);
            } else {
                setBotName('');
                setAcceptBotName(true);
            }
        } else {
            setAcceptUserName(false);
            setAcceptBotName(false);
        }
    },[botCurrentName, dispatch, userCurrentName]);
    /**
     * Изменяет текст ответа бота
     * @param {string} newBotAnswer новый текст ответа бота
     * @returns {(function(): void)|*}
     */
    const onChangeBotAnswer = (newBotAnswer) => () => {
        if(newBotAnswer.trim() !== '' && newBotAnswer.trim() !== botCurrentAnswer) {
            dispatch(changeBotAnswer({newBotAnswer: newBotAnswer.trim()}));
            setAcceptBotAnswer(true);
        }
    }
    /**
     * Запоминает введённый текст в строке ввода имени User
     * @param event событие ввода текса
     */
    const changeUserNameHandler = useCallback( (event) => {
        setUserName(event.target.value);
        setAcceptUserName(false);
    },[]);
    /**
     * Запоминает введённый текст в строке ввода имени Bot
     * @param event событие ввода текса
     */
    const changeBotNameHandler = useCallback( (event) => {
        setBotName(event.target.value);
        setAcceptBotName(false);
    }, []);
    /**
     * Запоминает введённый текст бота
     * @param event
     */
    const changeBotAnswerHandler = useCallback( (event) => {
        setBotAnswer(event.target.value);
        setAcceptBotAnswer(false);
    },[]);
    /**
     * Сброс имён и ответа бота к значениям по умолчанию
     * @type {(function(): void)|*}
     */
    const onDefaultDrop = useCallback( () => {
        dispatch(changeName({nameProfile: USER_DATA, newName: USER_DEFAULT_NAME}));
        dispatch(changeName({nameProfile: BOT_DATA, newName: BOT_DEFAULT_NAME}));
        dispatch(changeBotAnswer({ newBotAnswer: BOT_DEFAULT_ANSWER }));
        setUserName('');
        setBotName('');
        setBotAnswer(BOT_DEFAULT_ANSWER);
        setAcceptUserName(false);
        setAcceptBotName(false);
        setAcceptBotAnswer(false);
    },[dispatch]);

    return (
    <Box>
        <Typography variant="h3">Profile</Typography>
        <Box>
            <Typography component="p">User current name - "{userCurrentName}"</Typography>
            <Input value={userName} onChange={changeUserNameHandler} />
            <Button onClick={onChangeName(USER_DATA, userName)}>Confirm change</Button>
            {acceptUserName ? <CheckTwoToneIcon/> : ''}
        </Box>
        <Box>
            <Typography component="p">Bot current - "{botCurrentName}"</Typography>
            <Input value={botName} onChange={changeBotNameHandler} />
            <Button onClick={onChangeName(BOT_DATA, botName)}>Confirm change</Button>
            {acceptBotName ? <CheckTwoToneIcon/> : ''}
        </Box>
        <Box>
            <TextareaAutosize
                aria-label="bot_answer"
                placeholder="Write your message here"
                style={{ width: 182 }}
                minRows={4}
                value={botAnswer}
                onChange={changeBotAnswerHandler}
            />
            <Button onClick={onChangeBotAnswer(botAnswer)}>Confirm change</Button>
            {acceptBotAnswer ? <CheckTwoToneIcon/> : ''}
        </Box>
        <Button onClick={onDefaultDrop}>Default</Button>
    </Box>
  )
}