import {TextField, Typography} from "@mui/material";
import PropTypes from "prop-types";

/**
 * Презантационный компонент ввода параметров запроса на сервер
 * @param {string} children - текст заглавия
 * @param {string} param - текущее значение параметра запроса
 * @param {Function} onSetHandler - функция обработки ввода нового значения параметров
 * @param {boolean} fullWidth - функция управления шириной строки ввода
 * @param {string} ariaLabel - значение параметра label
 * @returns {JSX.Element}
 * @constructor
 */
export const SetRequestParams = ({children ,param, onSetHandler, fullWidth, ariaLabel}) => {

    return <>
        <Typography variant='body2' component='p'>{children}</Typography>
        <TextField aria-label={ariaLabel} sx={{mb: '15px'}} fullWidth={fullWidth} value={param} onChange={onSetHandler}/>
    </>
}

SetRequestParams.propTypes = {
    children: PropTypes.string.isRequired,
    param: PropTypes.string.isRequired,
    onSetHandler: PropTypes.func.isRequired,
    fullWidth: PropTypes.bool.isRequired,
    ariaLabel: PropTypes.string.isRequired,
}