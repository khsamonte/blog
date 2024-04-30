import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";

// Components
import MainLayout from "./components/MainLayout";
import Category from "./components/Category";
import Post from "./components/Post";

// Pages
import HomePage from "./routes/HomePage";

// Tracking ID
const TRACKING_ID = "G-BTHZPV49BG";

function usePageTracking() {
	useEffect(() => {
		ReactGA.initialize(TRACKING_ID);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
}

function App() {
	usePageTracking();

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route
					path="/"
					element={
						<MainLayout>
							<HomePage />
						</MainLayout>
					}
				/>

				<Route
					path="/:category"
					element={
						<MainLayout>
							<Category />
						</MainLayout>
					}
				/>

				<Route
					path="/:category/:post"
					element={
						<MainLayout>
							<Post />
						</MainLayout>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
