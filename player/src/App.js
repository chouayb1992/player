import PlayList from './PlayerList';
import { Players } from './players';
import './App.css';

function App() {
  return (
    <div className="App">
      <PlayList list ={Players}/>
    </div>
  );
}

export default App;