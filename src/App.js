import './App.css';
import {useState, useEffect} from 'react'
import {RenderList} from './components/RenderList'
import { Messages } from './components/Messages'

function App() {
  const [messages, setMessages] = useState([]);
  const [messages2, setMessages2] = useState([]);

  let onSubmit = (formState) => {
    setMessages([...messages, {author: 'You', text: formState}]);
    setMessages2([...messages]);
  }

  /*У меня тут бесконечный цикл, хотя изменения вносятся в message2, а отслеживается message. Не могу понять как его избежать. */
  useEffect(() => {
    if(messages2.length > 0 && messages2[messages2.length - 1].author !== 'Bot'){
      setInterval( () => {setMessages2([...messages2, {author: 'Bot', text: `Hi! I\`m a bot.`}])}, 1500);
    }
  }, [messages]);
/* Не могу понять причину такой ошибки. Мне же специально не нужна зависимость useEffect от изменения message2.
React Hook useEffect has a missing dependency: 'messages2'. Either include it or remove the dependency array. You can also do a functional update 'setMessages2(m => ...)' if you only need 'messages2' in the 'setMessages2' call  react-hooks/exhaustive-deps*/

  return (
    <>
      <Messages onSubmit={onSubmit} />
      <RenderList messageList={messages2} />
    </>
  );
}

export default App;