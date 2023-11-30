import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "../components/card/Card";
import SigninPage from "../pages/auth/signIn/SignIn";
import SignupPage from "../pages/auth/signUp/SignUp";
<<<<<<< HEAD
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
=======
import LandingPage from "../pages/public/landingPage/LandingPage";
// import { getFetchTrending } from "../api/movies";
const AppRouter = () => {
	// getFetchTrending();
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/signin" element={<SigninPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/card" element={<Card />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route />
			</Routes>
		</BrowserRouter>
	);
>>>>>>> bb54d8e570c4614d7af7f7d442392f4a8e290600
};

export default AppRouter;
