import Footer from "./components/Footer";
import NavigationBar from "./components/Navbar";
import Events from "./pages/Events";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
      <NavigationBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;