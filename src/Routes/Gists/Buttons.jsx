import {Box, Button} from "@mui/material";
import {LOADING_STATUS} from "../../store/gists/selector";
import PropTypes from "prop-types";

/**
 * Презентационный компонент кнопок запуска запроса и сброса его параметров
 * @param {string} status - текущий статус выполнения запроса
 * @param {Function} getRemoteDataHandler - Функция запуска запроса на получение данных с сервера
 * @param {Function} setDefaultHandler - Функция установки параметров запроса по умолчанию.
 * @returns {JSX.Element}
 * @constructor
 */
export const Buttons = ({status, getRemoteDataHandler, setDefaultHandler}) => {
    return <Box sx={{mb: '15px'}}>
        <Button disabled={status === LOADING_STATUS} variant='contained'
                onClick={getRemoteDataHandler}>Get remote data
        </Button>
        <Button disabled={status === LOADING_STATUS} sx={{ml: '20px'}} variant='contained'
                onClick={setDefaultHandler}>Set default
        </Button>
    </Box>
}

Buttons.propTypes = {
    status: PropTypes.string.isRequired,
    getRemoteDataHandler: PropTypes.func.isRequired,
    setDefaultHandler: PropTypes.func.isRequired
}