import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TrackPageViews() {
	const location = useLocation();

	useEffect(() => {
		if (window.goatcounter) {
			window.goatcounter.count({
				path: location.pathname + location.search,
			});
		}
	}, [location]);

	return null; // This component does not render anything
}

export default TrackPageViews;
