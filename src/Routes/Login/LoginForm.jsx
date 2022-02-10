import {Box, Button, Input, Typography} from "@mui/material";
import PropTypes from "prop-types";

/**
 * Презентационный компонент формы регистрации и входа
 * @param {string} children - Заголовок формы
 * @param {string} email - адрес электронной почты
 * @param {string} password - пароль
 * @param {string | boolean} password2 - повторение пароля при регистрации и false в случае входа
 * @param {boolean} acceptPwd - подтверждение отсутствия ошибок при вводе пароля
 * @param {string} switchMsg - сообщение о возможности перехода к другой форме
 * @param {string} switchBtn - текст в кнопке для перехода к другой форме
 * @param {boolean} acceptEmail - подтверждение отсутствия ошибок при вводе адреса электронной почты
 * @param {string} errorMsg - текст сообщения об ошибке при регистрации или входе
 * @param {Function} emailHandler - функция обработчик ввода адреса электронной почты
 * @param {Function} pwdHandler - функция обработчик ввода пароля
 * @param {Function} buttonHandler -  функция обработчик кнопки регистрации или входа
 * @param {Function} regSwitchHandler -  функция обработчик переключения между формами входа и регистрации
 * @returns {JSX.Element}
 * @constructor
 */
export const LoginForm = ({children, email, password, password2 = false, acceptPwd, switchMsg, switchBtn,
                              acceptEmail, errorMsg, emailHandler, pwdHandler, buttonHandler, regSwitchHandler }) => {
    return (
      <>
        <Typography variant='h5'> {children} </Typography>
        <Box>
            <Input type='email' placeholder="Email..." sx={{backgroundColor: acceptEmail ? 'none' : 'lightpink'}}
                            value={email} onChange={emailHandler} required={true} />
            {!acceptEmail ? <Typography sx={{paddingLeft: '10px'}} component='span' >{errorMsg}</Typography> : ''}
        </Box>
        <Box>
            <Input type='password' placeholder="Password..." sx={{backgroundColor: acceptPwd ? 'none' : 'lightpink'}}
                   value={password} onChange={pwdHandler({secondPwd: false})} required={true} />
            {!acceptPwd ? <Typography sx={{paddingLeft: '10px'}} component='span' >{errorMsg}</Typography> : ''}
        </Box>
        {password2 !== false ?
            <Input type='password' sx={{backgroundColor: acceptPwd ? 'none' : 'lightpink'}}
                placeholder="Retype Password..." value={password2}
                onChange={pwdHandler({secondPwd: true})} required={true} /> : ''}
        <Button variant='contained' sx={{marginTop: '15px'}} onClick={buttonHandler}>{children}</Button>
        <Box>
          <Typography component='span'>{switchMsg}</Typography>
          <Button onClick={regSwitchHandler}>{switchBtn}</Button>
        </Box>
      </>
    );
}

LoginForm.propTypes = {
    children: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    password2: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    acceptPwd: PropTypes.bool.isRequired,
    switchMsg: PropTypes.string.isRequired,
    switchBtn: PropTypes.string.isRequired,
    acceptEmail: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    emailHandler: PropTypes.func.isRequired,
    pwdHandler: PropTypes.func.isRequired,
    buttonHandler: PropTypes.func.isRequired,
    regSwitchHandler: PropTypes.func.isRequired
}