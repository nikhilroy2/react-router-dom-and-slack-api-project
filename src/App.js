import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slack from "./components/Slack/Slack";
import Homepage from "./components/Homepage/Homepage";
import Teams from "./components/Teams/Teams";
import Github from "./components/Github/Github";
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <BrowserRouter>
        <Sidebar />
          <div className="MainDash">
            <Routes>
              <Route path="/" element={<Homepage></Homepage>}></Route>
              <Route path="/Home" element={<Homepage></Homepage>}></Route>
              <Route path="/Slack" element={<Slack></Slack>}></Route>
              <Route path="/Teams" element={<Teams></Teams>}></Route>
              <Route path="/Github" element={<Github></Github>}></Route>
            </Routes>
          </div>
        </BrowserRouter>


        <div></div>
      </div>
    </div>
  );
}

export default App;
