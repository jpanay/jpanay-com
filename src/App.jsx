import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Overview from "./components/Overview/Overview";
import Resources from "./components/Resources/Resources";

const App = () => {
  return (
    <div className="text-zinc-50 pt-14">
      <Nav />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
};

export default App;
