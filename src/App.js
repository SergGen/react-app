import './App.css';
import {useState, useEffect} from 'react'
import {RenderList} from './components/RenderList'
import { Messages } from './components/Messages'

function App() {
  const [messages, setMessages] = useState([]);

  let onSubmit = (formState) => {
    setMessages([...messages, {author: 'You', text: formState}]);
  }

  useEffect(() => {
    if(messages.length > 0 && messages[messages.length - 1].author !== 'Bot'){
      setTimeout( () => {setMessages([...messages, {author: 'Bot', text: `Hi! I\`m a bot.`}])}, 1500);
    }
  }, [messages]);

  return (
    <>
      <Messages onSubmit={onSubmit} />
      <RenderList messageList={messages} />
    </>
  );
}

export default App;