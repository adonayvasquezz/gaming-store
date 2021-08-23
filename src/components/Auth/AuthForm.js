import { useState } from 'react';
import styles from './authForm.module.css';

const AuthForm = () => {

    const [isLogin, setIsLogin] = useState(true);

    const switchAuth = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div className="mt-5 row d-flex justify-content-center">
            <h1 className="text-center">{isLogin ? 'Log In' : 'Sign Up'}</h1>
            <form className="col-10 col-md-5">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                {isLogin === false &&
                    <div className="mb-3">
                        <label htmlFor="password2" className="form-label">Repeat your password</label>
                        <input type="password" className="form-control" id="password2" />
                    </div>
                }

                <button type="submit" className="btn btn-success d-block w-25 m-auto my-2">{isLogin ? 'Log In' : 'Sign Up'}</button>
                <h6 onClick={switchAuth} className={styles.switchText}>{isLogin ? 'Don’t have an account? Sign up' : 'Already have an account? Log in'}</h6>

            </form>
        </div>
    )
}

export default AuthForm;