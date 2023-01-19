import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "./assets/bootstrap/scss/_custom_scss.scss"
import './assets/css/mystyle.scss'
import Header from './components/Header';
import PrivateRoutes from './components/PrivateRoutes';
import About from './views/About';
import Login from './views/Auth/Login';
import Home from './views/Home';
import Footer from './components/Footer';
import Userpage from './views/Userpage';
import Message from './views/Message';
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivateRoutes />} >
            <Route path='/userpage' element={<Userpage />} />
          </Route>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/message' element={<Message />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
