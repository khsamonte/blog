import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";

// Components
import MainLayout from "./components/MainLayout";
import Category from "./components/Category";
import Post from "./components/Post";

// Pages
import HomePage from "./routes/HomePage";

function usePageViews() {
	const location = useLocation();

	useEffect(() => {
		// Assuming window.goatcounter is defined by the script you included in index.html
		if (window.goatcounter) {
			window.goatcounter.count({
				path: location.pathname + location.search,
			});
		}
	}, [location]);
}

function App() {
	usePageViews();

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
