import {Box, Button, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {Link as RouterLink} from "react-router-dom";
import {LOGIN_PATH} from "../../Routes/RoutesBlock";

/**
 * Презентационный компонент отображения статуса авторизации и кнопок входа и выхода
 * @param {string} userAuthEmail - email теекущего пользователя
 * @param {Function} logoutHandler - Функция обработчник выхода
 * @returns {JSX.Element}
 * @constructor
 */
export const LoginStatus = ({userAuthEmail, logoutHandler}) => {
    return (
        <>
        {userAuthEmail ?
                <Box>
                    <Typography component="span">Logged in:</Typography>
                    <Typography sx={{padding: '10px', fontWeight: 'bold', color: 'darkcyan'}}
                                component="span">{userAuthEmail}</Typography>
                    <Button color='info' variant='contained' onClick={logoutHandler}>Logout</Button>
                </Box> :
                <Button component={RouterLink} variant='contained' to={LOGIN_PATH}>Login</Button>
            }
        </>
    );
}

LoginStatus.propTypes = {
    userAuthEmail: PropTypes.string,
    logoutHandler: PropTypes.func.isRequired
}