import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Service } from "./components";


function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Service />
    </BrowserRouter>
   
  </div>
  
  );
}

export default App;

