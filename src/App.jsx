import './App.css';
import {RoutesBlock} from "./Routes/RoutesBlock";
import {CssBaseline} from "@mui/material";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./services/firebase";
import {setUserAuth} from "./store/profile/slice";
import {useDispatch} from "react-redux";

/**
 * Компонент-контейнер приложения
 * @returns {JSX.Element}
 * @constructor
 */
export const App = () => {
  const dispatch = useDispatch();
  /**
   * Хук для отслеживания статуса аутентификации на сервере
   */
  onAuthStateChanged(auth, (currentUser) => {
    dispatch(setUserAuth({email: currentUser ? currentUser?.email : ''}));
  });

  return (
  <>
    <CssBaseline />
    <RoutesBlock />
  </>
  );
}