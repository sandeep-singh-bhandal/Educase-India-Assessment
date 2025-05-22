import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome"
import SignUp from "../pages/SignUp"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={(<Welcome/>)}/>
      <Route path="/sign-up" element={(<SignUp/>)} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
