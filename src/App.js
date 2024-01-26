import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route index element = {<Home/>}/>
     


    </Routes>
    
    
    
    
    
    
    
    
    </BrowserRouter>

    </div>
  );
}

export default App;
