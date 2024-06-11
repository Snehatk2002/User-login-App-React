import logo from './logo.svg';
import './App.css';
import Addlogin from './components/Addlogin';
import AddSignup from './components/AddSignup';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addlogin/>}/>
      <Route path='/signup' element={<AddSignup/>}/>
      <Route path='/view' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
