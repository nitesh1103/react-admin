import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import './app.css';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="mainContainer">
        <Sidebar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/users' element={ <UserList /> } />
          <Route path='/users/edit/:id' element={ <User /> } />
          <Route path='/users/create' element={ <NewUser /> } />
          <Route path='/products' element={ <ProductList /> } />
          <Route path='/products/edit/:id' element={ <Product /> } />
          <Route path='/products/create' element={ <NewProduct /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
