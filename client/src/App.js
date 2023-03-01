import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/AddProduct';
import AuthNav from './Components/AuthNav';
import EditProduct from './Components/EditProduct';
import EditProfile from './Components/EditProfile';
import EditUser from './Components/EditUser';
import ErrorComponent from './Components/ErrorComponent';
import Home from './Components/Home';
import ListProduct from './Components/ListProduct';
import ListUsers from './Components/ListUsers';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';
import Register from './Components/Register';
import { current } from './Redux/Actions/AuthActions';


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(current())
},[])
  return (
    <div>
      <AuthNav/>
      <br/>
      <ErrorComponent/>
      <br/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path='/listUsers' element={<ListUsers/>}/>
        <Route path='/editUser/:id' element={<EditUser/>}/>
        <Route path='/editProfile/:id' element={<EditProfile/>}/>
        <Route path='/editProduct/:id' element={<EditProduct/>}/>
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/listProducts' element={<ListProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
