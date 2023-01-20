import { useState, useEffect } from "react";
import Login from "./Components/Pages/Login";
import CharacterSelect from "./Components/Pages/CharacterSelect";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedUser = localStorage.getItem("isLoggedIn");
		if (storedUser === "1") {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// Using this prior to router and link
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
	};

	return (
		<div className="App">
			{!isLoggedIn && <Login onLogin={loginHandler} />}
			{isLoggedIn && <CharacterSelect onLogout={logoutHandler} />}
		</div>
	);
}

export default App;
