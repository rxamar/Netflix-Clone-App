import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPage from "../pages/auth/signIn/SignIn";
import SignupPage from "../pages/auth/signUp/SignUp";
import { getFetchTrending } from "../api/movies";
import HomePage from "../pages/portal/home/page";
const AppRouter = () => {
  getFetchTrending();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
