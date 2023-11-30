import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "../components/card/Card";
import SigninPage from "../pages/auth/signIn/SignIn";
import SignupPage from "../pages/auth/signUp/SignUp";
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
};

export default AppRouter;
