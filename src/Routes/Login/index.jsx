import {useState} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../services/firebase";
import {Box} from "@mui/material";
import {LoginForm} from "./LoginForm";
import {useNavigate} from "react-router-dom";

/**
 * Компонент-контейнер страницы регистрации и входа
 * @returns {JSX.Element}
 * @constructor
 */
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [acceptPwd, setAcceptPwd] = useState(true);
    const [acceptEmail, setAcceptEmail] = useState(true);
    const [regFormChecked, setRegFormChecked] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    let navigate = useNavigate();

    const ERROR_CODE_USER_NOT_FOUND = 'auth/user-not-found';
    const ERROR_CODE_WRONG_PASSWORD = 'auth/wrong-password';
    const ERROR_CODE_EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use';
    const ERROR_CODE_INVALID_EMAIL = 'auth/invalid-email';
    const ERROR_CODE_WEAK_PASSWORD = 'auth/weak-password';

    /**
     * Функция обработчик ввода email
     * @param event
     */
    const emailHandler = event => {
        setAcceptEmail(true);
        setEmail(event.target.value.trim());
    }

    /**
     * Функция обработчик ввода пароля
     * @param {boolean} secondPwd - признак ввода повтора пароля при регистрации
     * @returns {(function(*): void)|*}
     */
    const pwdHandler = ({secondPwd}) => (event) => {
        setAcceptPwd(true);
        secondPwd ? setPassword2(event.target.value.trim()) : setPassword(event.target.value.trim());
    }

    /**
     * Функция обработчик кнопки регистрации пользователя на сервере
     * @returns {Promise<void>}
     */
    const regHandler = async () => {
        if(password === password2) {
            try {
                const user = await createUserWithEmailAndPassword(auth, email, password);
                console.log(user);
                setErrorMsg('');
                navigate(-1);
            } catch (error) {
                switch(error.code){
                    case ERROR_CODE_EMAIL_ALREADY_IN_USE:
                        setAcceptEmail(false);
                        setErrorMsg('Your typed email is already in use. Please enter a different email.');
                        break;
                    case ERROR_CODE_INVALID_EMAIL:
                        setAcceptEmail(false);
                        setErrorMsg('Your typed email is invalid. Please enter a correct email.');
                        break;
                    case ERROR_CODE_WEAK_PASSWORD:
                        setAcceptPwd(false);
                        setErrorMsg('Your typed password is weak. Please enter a stronger password.');
                        break;
                    default: setErrorMsg('');
                }
                console.dir(error);
            }
        } else {
            setErrorMsg('Your typed passwords do not match. Please enter the same passwords.');
            setAcceptPwd(false);
        }
    };

    /**
     * Функция обработчик кнопки входа на сервер
     * @returns {Promise<void>}
     */
    const loginHandler = async () => {
        try {
            const user = await signInWithEmailAndPassword( auth, email, password );
            console.log(user);
            setErrorMsg('');
            navigate(-1);
        } catch (error) {
            switch(error.code){
                case ERROR_CODE_INVALID_EMAIL:
                    setAcceptEmail(false);
                    setErrorMsg('Your typed email is invalid. Please enter a correct email.');
                    break;
                case ERROR_CODE_USER_NOT_FOUND:
                    setAcceptEmail(false);
                    setErrorMsg('Your typed email is not registered.');
                    break;
                case ERROR_CODE_WRONG_PASSWORD:
                    setAcceptPwd(false);
                    setErrorMsg('Your password is incorrect');
                    break;
                default: setErrorMsg('');
            }
            console.dir(error);
        }
    };

    /**
     * Функция обработчик кнопки переключения между формами регистрации и входа на сервер
     */
    const regSwitchHandler = () => {
        setEmail('');
        setPassword('');
        setPassword2('');
        setErrorMsg('');
        setAcceptPwd(true);
        setAcceptEmail(true);
        setRegFormChecked(!regFormChecked);
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}
             component="form" onSubmit={(event) => event.preventDefault()}>
            {regFormChecked ?
            <LoginForm email={email} password={password} password2={password2} acceptPwd={acceptPwd}
                       acceptEmail={acceptEmail} errorMsg={errorMsg}
                       switchMsg='Already have an account?' switchBtn='Login'
                       emailHandler={emailHandler} pwdHandler={pwdHandler}
                       buttonHandler={regHandler} regSwitchHandler={regSwitchHandler}>
                    Register User
            </LoginForm> :
            <LoginForm email={email} password={password} acceptEmail={acceptEmail} errorMsg={errorMsg}
                       acceptPwd={acceptPwd} switchMsg='No account?' switchBtn='Register User'
                       emailHandler={emailHandler} pwdHandler={pwdHandler}
                       buttonHandler={loginHandler} regSwitchHandler={regSwitchHandler}>
                    Login
            </LoginForm>
            }
        </Box>
    );
}