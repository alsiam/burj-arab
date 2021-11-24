import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const location=useLocation();
  const history=useHistory();
  const location_uri=location.state?.from || "/home"

  const handleGoogleLogin=()=>{
      signInWithGoogle()
      .then((data) => {
        history.push(location_uri)
      });
  }

  return (
    <div>
      <h1>This is Login</h1>
      <button onClick={handleGoogleLogin}>Google Login</button>
    </div>
  );
};

export default Login;
