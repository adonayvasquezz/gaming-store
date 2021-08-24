import { useEffect, useState } from 'react';
import styles from './authForm.module.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_REGISTER = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const API_LOGIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    
    const [isLogin, setIsLogin] = useState(true);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [passwordLength, setPasswordLength] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => { // Form validation
        if ( formSubmitted && !isLogin && password1 !== password2) {
            setPasswordMatch(false)
        } else {
            setPasswordMatch(true)
        }
        setPasswordLength(password1.length);
    }, [formSubmitted, isLogin, password1, password2]);

    // Change isLogin state to show either LogIn or SignUp form
    const switchAuth = () => {
        setIsLogin(!isLogin);
        setErrorMessage('');
        setPasswordMatch(true)
    }

    const authRequest = async (email, password, endpoint) => {

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            }),
            headers: {'Content-Type': 'application/json'}
        }
        try {
            let response = await fetch(endpoint, requestOptions);
            let data = await response.json();
            console.log('Data: ', data);
            if (data && data.error) {
                setErrorMessage(data.error.message);
                //console.log(data.error.message);
            }
        } catch (error) {
            console.error('Error: ',error);
        }
    }
    const emailInput = (e) => {
        setEmail(e.target.value);
    }
    const passwordInput1 = (e) => {
        setPassword1(e.target.value);
    }
    const passwordInput2 = (e) => {
        setPassword2(e.target.value);
    }

    const submitCredentials = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        if(password1 !== password2 && !isLogin) return; // Prevent api call if passwords doesn´t match
        if (isLogin) {
            authRequest(email, password1, API_LOGIN);
        } else {
            authRequest(email, password1, API_REGISTER);
        }
    }

    return (
        <div className="mt-5 row d-flex justify-content-center">
            <h1 className="text-center">{isLogin ? 'Log In' : 'Sign Up'}</h1>
            <form onSubmit={submitCredentials} className="col-10 col-md-6 col-lg-4">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={emailInput} id="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={passwordInput1} id="password" required />
                </div>
                {isLogin === false &&
                    <div className="mb-3">
                        <label htmlFor="password2" className="form-label" >Repeat your password</label>
                        <input type="password" className="form-control" onChange={passwordInput2} id="password2" />
                    </div>
                }
                {!passwordMatch && <p className="text-danger">Password doesn´t match</p> }
                {formSubmitted && passwordLength<8 && <p className="text-danger">Password must have at least 8 characters</p> }
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                
                <button disabled={ passwordLength<8} type="submit" className="btn btn-success d-block w-25 m-auto my-2">{isLogin ? 'Log In' : 'Sign Up'}</button>
                <h6 onClick={switchAuth} className={styles.switchText}>{isLogin ? 'Don’t have an account? Sign up' : 'Already have an account? Log in'}</h6>
            </form>
        </div>
    )
}
export default AuthForm;