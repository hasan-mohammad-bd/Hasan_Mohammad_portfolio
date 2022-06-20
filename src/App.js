
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import PageNotFound from "./component/PageNotFound";
import ProjectDetails from "./component/Home/ProjectDetails";
import ProjectDetailsMore from "./component/Home/ProjectDetailsMore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./component/Footer";
import About from "./component/About";
import Blogs from "./component/Blogs";


function App() {
  return (
    <div className="App">
      <div className="black-back">
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
          <Route path='/:id' element={<ProjectDetailsMore></ProjectDetailsMore>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
