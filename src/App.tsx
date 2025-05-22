import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome"
import SignUp from "../pages/SignUp"
import Login from "../pages/Login"
import User from "../pages/User"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={(<Welcome/>)}/>
      <Route path="/sign-up" element={(<SignUp/>)} />
      <Route path="/login" element={(<Login/>)} />
      <Route path="/user" element={(<User/>)} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
