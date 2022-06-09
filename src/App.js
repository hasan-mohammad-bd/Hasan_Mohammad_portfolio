
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import PageNotFound from "./component/PageNotFound";
import Navbar from './component/Navbar/Navbar';


function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
