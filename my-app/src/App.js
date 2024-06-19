import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
// import contact from "./Components/contact";
// import about from "./Components/about";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Home />
      <contact />
      <about/>
    </div>
    </BrowserRouter>
  );
}

export default App;