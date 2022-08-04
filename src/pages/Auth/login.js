

import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import React, {  useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import { auth } from "../../app/firebase";


// import 'login.css';
export const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => signInWithPopup(auth, provider);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      return user;
    } catch (error) {
      let errMessage = "There was an error";
      const sanitizeErrMsg = error.message.split("/")[1].split(")")[0];

      if (sanitizeErrMsg === "too-many-requests") {
        errMessage = "Too many request. Please try again later";
      }

      if (sanitizeErrMsg === "wrong-password") {
        errMessage = "Email and password doesn't match";
      }

      if (sanitizeErrMsg === "user-not-found") {
        errMessage = "User not found. Please register";
      }

      if (sanitizeErrMsg === "email-already-in-use") {
        errMessage = "Email already in use";
      }

      setErrorMessage(`* ${errMessage}`);
    }
  };

    return (
       
            <div className="d-lg-flex half">
                <div
                    className="bg order-1 order-md-2 bg-login"
                    
                ></div>
                <div className="contents order-2 order-md-1">
                    <div className="container">
                   
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7">
                                <div className="mb-4">
                                    <h3>Sign In</h3>
                                  
                                </div>
                                <form onSubmit={handleSubmit} autoComplete="off">
                                    <div className="form-group first">
                                        <label >Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group last mb-3">
                                        <label >Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            required
                                        />
                                    </div>
                                    <div className="d-flex mb-5 align-items-center">
                                        <label className="control control--checkbox mb-0">
                                            <span className="caption">
                                                Remember me
                                            </span>
                                            <input type="checkbox" readOnly />
                                            <div className="control__indicator"></div>
                                        </label>
                                        <span className="ml-auto">
                                            <Link to="/register" className="forgot-pass">
                                           
                                                Register
                                           
                                            </Link>
                                        </span>
                                    </div>
                                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                                    <input
                                        type="submit"
                                        value="Log In"
                                        className="btn btn-block btn-primary"
                                    />
                                    <span className="d-block text-center my-4 text-muted">
                                        — or —
                                    </span>
                                    <div className="social-login">
                                        {/* <a
                                            
                                            className="facebook btn d-flex justify-content-center align-items-center"
                                        >
                                         
                                            Login with Facebook
                                        </a>
                                        <a
                                            
                                            className="twitter btn d-flex justify-content-center align-items-center"
                                        >
                                            
                                            Login with Twitter
                                        </a> */}
                                        <a
                                            onClick={signInWithGoogle}
                                            className="google btn d-flex justify-content-center align-items-center text-white"
                                        >
                                           
                                            Login with Google
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};
