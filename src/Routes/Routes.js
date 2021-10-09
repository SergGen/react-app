import { Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { NotFound } from './NotFound'
import { Profile } from './Profile'
import { Chats } from './Chats'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route exact path="/chats" component={Chats} />
      <Route path="/chats/:chatId" component={Chats} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}