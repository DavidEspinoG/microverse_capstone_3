import './App.css';
import { useParams } from 'react-router-dom';

function App() {
  const { id } = useParams();
  return (
    <div className="App">
      <h1>{id}</h1>
    </div>
  );
}

export default App;
