import React from "react";
import "./css/Login.css";

function Login() {
	const register = () => {};
    const loginToApp = () => {
    }
	return (
		<div className='login'>
			<img
				src='https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png'
				alt='Linkedin Logo'
			/>
			<form>
				<input type='text' placeholder='Full name(required if registering)' />
				<input type='text' placeholder='Profile picture URl (optional)' />
				<input type='email' placeholder='Email' />
				<input type='password' name='Password' />
				<button type='submit' onClick={loginToApp}>Sign In</button>
			</form>
			<p>
				Not a member?{" "}
				<span className='login__register' onClick={register}>
					Register Now
				</span>
			</p>
		</div>
	);
}

export default Login;
