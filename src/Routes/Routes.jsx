import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { Profile } from './Profile';
import { Chats } from './Chats';
import {Gists} from "./Gists";

export const HOME_PATH = '/';
export const PROFILE_PATH = '/profile';
export const CHATS_PATH = '/chats';
export const GISTS_PATH = '/gists';
export const CHAT_ID_NAME = 'chatId';

/**
 * Компонент-контейнер роутеров
 * @returns {JSX.Element}
 * @constructor
 */
export const Routes = () => {
  return (
    <Switch>
      <Route exact path={HOME_PATH} component={Home} />
      <Route path={PROFILE_PATH} component={Profile} />
      <Route exact path={CHATS_PATH} component={Chats} />
      <Route path={CHATS_PATH + "/:" + CHAT_ID_NAME} component={Chats} />
      <Route path={GISTS_PATH} component={Gists} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}