import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./views/Main";
import Main2 from "./views/Main2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main2" element={<Main2 />} />
      </Routes>
    </>
  );
}

export default App;
