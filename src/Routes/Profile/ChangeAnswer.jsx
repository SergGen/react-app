import {Box, Button, TextField} from "@mui/material";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import PropTypes from "prop-types";

/**
 * Презентиционный компонент для смены автоответа.
 * @param {string} personName - имя пользователя, чей автоответ меняется
 * @param {string} newAnswer - новый текст автоответа
 * @param {string} currentAnswer - текущий текст автоответа
 * @param {Function} changeAnswerHandler - обработчик ввода автоответа
 * @param {Function} onChangeAnswer - функция смены автоответа
 * @param {boolean} acceptAnswer - флаг подтверждения факта смены автоответа
 * @returns {JSX.Element}
 * @constructor
 */
export const ChangeAnswer = ({personName, newAnswer, currentAnswer,
                                 changeAnswerHandler, onChangeAnswer, acceptAnswer}) => {

    return <Box>
        <TextField color={newAnswer.trim() === '' ? 'warning' : 'primary'}
                   aria-label="bot_answer" multiline placeholder={`Write ${personName} message here`}
                   sx={{ width: 182 }} minRows={4}
                   value={newAnswer}
                   onChange={changeAnswerHandler}
        />
        <Button disabled={newAnswer.trim() === '' || newAnswer.trim() === currentAnswer}
                onClick={onChangeAnswer(newAnswer)}>Confirm change
        </Button>
        {acceptAnswer ? <CheckTwoToneIcon/> : ''}
    </Box>
}

ChangeAnswer.propTypes = {
    personName: PropTypes.string.isRequired,
    newAnswer: PropTypes.string.isRequired,
    currentAnswer: PropTypes.string.isRequired,
    personId: PropTypes.string.isRequired,
    acceptAnswer: PropTypes.bool.isRequired,
    changeAnswerHandler: PropTypes.func.isRequired,
    onChangeAnswer: PropTypes.func.isRequired
}