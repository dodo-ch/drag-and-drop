import { useState } from 'react';
import './App.css';
import { DragAndDrop } from './components/DragAndDrop';
import { FileDragAndDrop } from './components/FileDragAndDrop';
import { Title } from './components/Title';

function App() {
  
const [page, setPage] = useState(1)
  return (
    <div className=" flex flex-col justify-center items-center">
    <Title page={page} setPage={setPage}/>
    {page === 1 ? <DragAndDrop /> : <FileDragAndDrop/> }

  </div>
  );
}

export default App;
