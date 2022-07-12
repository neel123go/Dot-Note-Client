import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginRegister/Login/Login";
import RequireAuth from "./Pages/LoginRegister/RequireAuth/RequireAuth";
import SignUp from "./Pages/LoginRegister/SingUp/SignUp";
import Notes from "./Pages/Notes/Notes";

function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/notes" element={
          <RequireAuth>
            <Notes></Notes>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
