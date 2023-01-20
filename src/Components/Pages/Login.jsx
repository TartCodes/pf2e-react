import classes from "./Login.module.css";
import Button from "../UI/Button";

const Login = (props) => {
	return (
		<div className={classes.login}>
			<div className="">Login</div>
			<Button onClick={props.login}>Login</Button>
		</div>
	);
};

export default Login;
