import {Button, Container, Typography} from "@mui/material";
import DangerousIcon from '@mui/icons-material/Dangerous';
import PropTypes from "prop-types";

/**
 * Компонет - предохранитель
 * @param {Object} error - Объект ошибки
 * @param {Function} resetErrorBoundary - Функция сброса состояния
 * @returns {JSX.Element}
 * @constructor
 */
export const ErrorFallback = ({error, resetErrorBoundary}) => {
    return <Container >
        <DangerousIcon fontSize="large" />
        <Typography variant="h5" >Woooooopsss... Something wrong...</Typography>
        <pre>{error.message}</pre>
        <Button variant='contained' onClick={resetErrorBoundary}>Try again</Button>
    </Container>
}

ErrorFallback.propTypes = {
    error: PropTypes.object.isRequired,
    resetErrorBoundary: PropTypes.func.isRequired
}