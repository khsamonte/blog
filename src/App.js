import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import MainLayout from "./components/MainLayout";
import Category from "./components/Category";
import Post from "./components/Post";

// Hooks
import TrackPageViews from "./hooks/TrackPageViews";

// Pages
import HomePage from "./routes/HomePage";

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<TrackPageViews />
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
