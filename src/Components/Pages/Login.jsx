const Login = (props) => {
	console.log(props.login);
	return (
		<div className="main-wrapper">
			<div className="login">Login</div>
			<button onClick={props.login}>Click</button>
		</div>
	);
};

export default Login;
