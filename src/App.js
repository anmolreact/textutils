import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
     <Navbar title = "TextUtils" text1 = "Home" text2 = "About" text3 = "Contact Us"/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/about" element = {<About />} />
        <Route exact path="/"  element = { <TextForm heading = "Enter the text to analyze below: "/> } />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
