import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

//  Style
import "./styles/main.scss";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageOne />} exact />
        <Route path="/page2" element={<PageTwo />} />
      </Routes>
    </Router>
    
  );
}

export default App;
