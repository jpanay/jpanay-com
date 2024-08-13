import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Overview from "./components/Overview/Overview";

const App = () => {
  return (
    <div className="h-screen w-screen bg-zinc-800 pt-10">
      <Nav />
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </div>
  );
};

export default App;
