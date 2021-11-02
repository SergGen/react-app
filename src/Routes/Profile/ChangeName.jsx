import {Box, Button, Input, Typography} from "@mui/material";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import PropTypes from "prop-types";

/**
 * Презентиционный компонент для смены имени
 * @param {string} personName - новое имя
 * @param {string} newName - новое имя
 * @param {string} currentName - текущее имя
 * @param {string} personId - идентификатор пользователь или бот
 * @param {boolean} acceptName - флаг подтверждения факта смены имени
 * @param {Function} changeNameHandler - обработчик ввода имени
 * @param {Function} onChangeName - функция смены имени
 * @returns {JSX.Element}
 * @constructor
 */
export const ChangeName = ({personName , newName, currentName, personId,
                               acceptName, changeNameHandler, onChangeName}) => {

    return <Box mb="10px">
        <Typography component="p">{personName} current name - "{currentName}"</Typography>
        <Input color={newName.trim() === '' ? 'warning' : 'primary'} value={newName} onChange={changeNameHandler} />
        <Button disabled={newName.trim() === ''} onClick={onChangeName(personId, newName)}>Confirm change</Button>
        {acceptName ? <CheckTwoToneIcon/> : ''}
    </Box>
}

ChangeName.propTypes = {
    personName: PropTypes.string.isRequired,
    newName: PropTypes.string.isRequired,
    currentName: PropTypes.string.isRequired,
    personId: PropTypes.string.isRequired,
    acceptName: PropTypes.bool.isRequired,
    changeNameHandler: PropTypes.func.isRequired,
    onChangeName: PropTypes.func.isRequired
}