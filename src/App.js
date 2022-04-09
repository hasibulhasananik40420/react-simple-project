import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Orders from './Components/Orders/Orders';
import Invantory from './Components/Invantory/Invantory';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import SingUp from './Components/SingUp/SingUp';

function App() {
  return (
    <div>
     
    <Header></Header>

      <Routes>
       <Route path='/' element={<Shop></Shop>}> </Route>
       <Route path='/shop' element={<Shop></Shop>}></Route>
       <Route path='orders' element={<Orders></Orders>}></Route>
       <Route path='/invantory' element={<Invantory></Invantory>}></Route>
       <Route path='/about' element={<About></About>}> </Route>
       <Route path='/login' element={<Login></Login>}> </Route>
       <Route path='/singup' element={<SingUp></SingUp>}> </Route>
      </Routes>
    

    </div>
  );
}

export default App;
