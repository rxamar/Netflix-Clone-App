import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPage from "../pages/auth/signIn/SignIn";
import SignupPage from "../pages/auth/signUp/SignUp";
import { getFetchTrending } from "../api/movies";
const AppRouter = () => {
  getFetchTrending();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
