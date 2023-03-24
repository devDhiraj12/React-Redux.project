import logo from './logo.svg';
import './App.css';
import AddCounter from './AddCounter';
import ReduceCounter from './ReduceCounter';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
     <Counter/>
     <AddCounter/>
     <ReduceCounter/>
     
    </div>
  );
}

export default App;
