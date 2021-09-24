import './App.css';
import {Message} from './components/Message'

function App() {
  const content = 'lorem lorem lorem lorem';
  return (
    <div className="App">
      <Message text={content}/>
      <Message text={content}/>
      <Message text={content} active={true}/>
    </div>
  );
}

export default App;
