
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import PageNotFound from "./component/PageNotFound";
import Navbar from './component/Navbar/Navbar';
import ProjectDetails from "./component/Home/ProjectDetails";
import ProjectDetailsMore from "./component/Home/ProjectDetailsMore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
          <Route path='/:id' element={<ProjectDetailsMore></ProjectDetailsMore>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
