import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignupPage from "./pages/Signup";
// import LoginPage from "./pages/Login";
import ForgetPassword from "./auth/ForgetPassword";
import ResetPassword from "./auth/ResetPassword";
import SignUp from "./auth/SignUp";
// import Login from "./components/ForgetPassword";
import { UserProvider } from "./auth/UserContext";
import Login from "./auth/Login";
import Home from "./pages/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Verify from "./auth/Verify";
import Step from "./auth/Otp";

function App() {
  return (
    <div className="">
      <div className="">
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="/verify" element={<Verify />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/otp" element={<Step />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </div>
    </div>
  );
}

export default App;
