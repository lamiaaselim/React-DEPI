import { Route, Routes } from "react-router";
import "./app.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Home from "./pages/Home";
import Login from './pages/Login';
import NotFound from './pages/NotFound';

/*eslint-disable*/
function App() {
  return (
    <>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MyFooter />
    </>
  );
}

export default App;
