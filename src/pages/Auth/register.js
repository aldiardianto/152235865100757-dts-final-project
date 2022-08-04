import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
import { auth } from "../../app/firebase";

// import 'login.css';
export const Register = () => {
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
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        console.log(email);
        navigate("/");
        return user;
      } catch (error) {
        let errMessage = "There was an error";
        const sanitizeErrMsg = error.message.split("/")[1].split(")")[0];
  
        if (sanitizeErrMsg === "weak-password") {
          errMessage = "Password should be at least 6 characters";
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
                                    <h3>Register</h3>
                                  
                                </div>
                                <form onSubmit={handleSubmit} autoComplete='false'>
                                    <div className="form-group first">
                                        <label >Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                        />
                                    </div>
                                    <div className="form-group last mb-3">
                                        <label >Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                        />
                                    </div>
                                    <div className="d-flex mb-5 align-items-center">
                                        
                                        <span className="ml-auto">
                                        <Link to="/login" className="forgot-pass">
                                            
                                                Back to login
                                           
                                        </Link>
                                        </span>
                                    </div>
                                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                                    <input
                                        type="submit"
                                        value="Register"
                                        className="btn btn-block btn-primary"
                                    />
                                    <span className="d-block text-center my-4 text-muted">
                                        — or —
                                    </span>
                                    <div className="social-login">
                                        {/* <a
                                            
                                            className="facebook btn d-flex justify-content-center align-items-center"
                                        >
                                         
                                            Register with Facebook
                                        </a>
                                        <a
                                            
                                            className="twitter btn d-flex justify-content-center align-items-center"
                                        >
                                            
                                            Register with Twitter
                                        </a> */}
                                        <a
                                            onClick={signInWithGoogle}
                                            className="google btn d-flex justify-content-center align-items-center text-white"
                                        >
                                           
                                            Register with Google
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
