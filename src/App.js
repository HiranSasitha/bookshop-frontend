import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import ItemByCategory from './ItemByCategory';
import SingleItem from './SingleItem';
import Checkout from './Checkout';
import AdminHome from './admin/AdminHome';
import CategoryManage from './admin/CategoryManage';
import ItemManage from './admin/ItemManage';
import UpadateItem from './admin/UpdateItem';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route index element = {<Home/>}/>
      <Route path='/category/:id' element = {<ItemByCategory/>}/>
      <Route path='/item/:id' element = {<SingleItem/>}/>
      <Route path='/cart' element ={<Checkout/>}/>
      <Route path='/admin' element ={<AdminHome/>}/>
      <Route path='/admin/categories' element ={<CategoryManage/>}/>
      <Route path='/admin/items' element ={<ItemManage/>}/>
      <Route path='/admin/item/:id' element ={<UpadateItem/>}/>


     


    </Routes>
    
    
    
    
    
    
    
    
    </BrowserRouter>

    </div>
  );
}

export default App;
