
import { Route, Routes } from 'react-router-dom';
import Blogs from './Component/Blogs/Blogs';
import CheckOut from './Component/CheckOut/CheckOut';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
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
   </Routes>
    </div>
  );
}

export default App;
