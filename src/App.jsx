import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Overview from "./components/Overview/Overview";
import "./App.css";

const App = () => {
  return (
    <div className="text-zinc-50 pt-14">
      <Nav />
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </div>
  );
};

export default App;
