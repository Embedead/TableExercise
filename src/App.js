import logo from './logo.svg';
import './App.css';
import { TableView } from './views/TableView';
import { useSelector } from 'react-redux';

function App() {
  const table = useSelector((state)=> state.workerTable);
  console.log("table is", table)
  return (
    <TableView/>
  );
}

export default App;
