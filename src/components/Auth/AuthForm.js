import { useEffect, useState } from 'react';
import styles from './authForm.module.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

const AuthForm = () => {
    
    const [isLogin, setIsLogin] = useState(true);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [passwordLength, setPasswordLength] = useState(0);
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false)

    useEffect(() => {
        console.log('comparar: ', password1, password2);
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
        setPasswordMatch(true)
    }

    const signUpRequest = async (email, password) => {

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
            let response = await fetch(API_URL, requestOptions);
            let data = await response.json();
            console.log('Data: ', data);
        } catch (error) {
            console.error('Error: ',error);
        }
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
        if (isLogin) {
        } else {
            //signUpRequest(email, password);
        }
    }

    return (
        <div className="mt-5 row d-flex justify-content-center">
            <h1 className="text-center">{isLogin ? 'Log In' : 'Sign Up'}</h1>
            <form onSubmit={submitCredentials} className="col-10 col-md-6 col-lg-4">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" required />
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
                
                <button type="submit" className="btn btn-success d-block w-25 m-auto my-2">{isLogin ? 'Log In' : 'Sign Up'}</button>
                <h6 onClick={switchAuth} className={styles.switchText}>{isLogin ? 'Don’t have an account? Sign up' : 'Already have an account? Log in'}</h6>

            </form>
        </div>
    )
}

export default AuthForm;