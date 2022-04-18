
import { Route, Routes } from 'react-router-dom';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import CheckOut from './Component/CheckOut/CheckOut';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import SingUp from './Component/SingUp/SingUp';


function App() {
  return (
    <div className="App">
      <Header></Header>
   <Routes>
     <Route path="/" element={<Home></Home>}></Route>
     <Route path="/Home" element={<Home></Home>}></Route>
     <Route path="/CheckOut" element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
     <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
     <Route path="/Login" element={<Login></Login>}></Route>
     <Route path="/SingUp" element={<SingUp></SingUp>}></Route>
     <Route path="/Abouts" element={<About></About>}></Route>
     <Route path="*" element={<NotFound></NotFound>}></Route>
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
