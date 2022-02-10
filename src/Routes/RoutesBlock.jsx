import {Route, Routes} from 'react-router-dom';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { Profile } from './Profile';
import { Chats } from './Chats';
import {Gists} from "./Gists";
import {Login} from "./Login";
import {Layout} from "../components/Layout";

export const HOME_PATH = '/';
export const PROFILE_PATH = '/profile';
export const CHATS_PATH = '/chats';
export const GISTS_PATH = '/gists';
export const LOGIN_PATH = '/login'
export const CHAT_ID_NAME = 'chatId';

/**
 * Компонент-контейнер роутеров
 * @returns {JSX.Element}
 * @constructor
 */
export const RoutesBlock = () => {
  return (
    <Routes>
        <Route path={HOME_PATH} element={<Layout />}>
          <Route index path={HOME_PATH} element={<Home />} />
          <Route path={PROFILE_PATH} element={<Profile />} />
          <Route path={CHATS_PATH} element={<Chats />} >
            <Route path={":" + CHAT_ID_NAME} element={<Chats />} />
          </Route>
          <Route path={GISTS_PATH} element={<Gists />} />
          <Route path={LOGIN_PATH} element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  )
}