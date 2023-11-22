import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../src/components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Start from "./components/Start";
import Contact from "./components/Contact";

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path={'/'} element ={<Start/>}/>
          <Route path={'/Contact'} element ={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
