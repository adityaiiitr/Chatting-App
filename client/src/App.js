import { Route, Routes, useLocation, useParams } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
     <div className="App">
      <Header pathname={pathname} />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
