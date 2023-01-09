import './App.css';
import { DragAndDrop } from './components/DragAndDrop';
import { Title } from './components/Title';

function App() {
  

  return (
    <div className="container-main flex flex-col justify-center items-center">
    <Title />
    <DragAndDrop />
  </div>
  );
}

export default App;
