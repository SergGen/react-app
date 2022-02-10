import {LOADING_STATUS, REJECTED_STATUS, RESOLVED_STATUS} from "../../store/gists/selector";
import {CircularProgress, Typography} from "@mui/material";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import PropTypes from "prop-types";

/**
 * Презентиционный компонент вывода на экран стату са выполнения запроса или полученного списка
 * @param {string} status - текущий статус выполнения запроса
 * @param {Array} dataGists - полученный список для отрисовки
 * @param {string} error - текст сообщения об ошибке
 * @returns {JSX.Element}
 * @constructor
 */
export const DataOutput = ({status, dataGists, error}) => {

    return <>
        {status === LOADING_STATUS ? <CircularProgress /> : ''}
        {status === REJECTED_STATUS ? <Typography component='p'>Error: {error}</Typography> : ''}
        {status === RESOLVED_STATUS ? dataGists.map(({id, title, completed}) =>
            <Typography component='p' key={id}>
                {completed ? <CheckTwoToneIcon fontSize="small" /> : <HighlightOffOutlinedIcon fontSize="small" />}
                <Typography component="span"> {title}</Typography>
            </Typography>) : ''}
    </>
}

DataOutput.propTypes = {
    status: PropTypes.string.isRequired,
    dataGists: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
        }
    )),
    error: PropTypes.string
}