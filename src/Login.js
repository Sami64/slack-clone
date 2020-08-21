import React from "react";

import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://lh3.googleusercontent.com/v0e4gzjcRBe318BaNPXzuSfmBm_dqUBZPM-NE6rsUfptnSso3yFgU7YYN5NMy_JOfwe-Yf85Ju4Rwb6erKJrgKyACLW7JaT2jDe1nHcTgI_lfh_d6CYb0YyQxVMwEbhDCvjQ8c8kBMoe901A26BlJyV4jHigYJS5ZEKCbzcMi2HQpWjxZfKsxUfRyz4LbVfAXSSNUyxmoYHTG7A02P5nIddDrY7Y5w_9maiQeFfxYmCOMy_5F07CewjWjyWCn2rfhZ_xsMlwaPPdqsJpFPLjjhOCRW8IXcO8NxismIE8rRudv03zIVUAeY5YqNuvLC9RXFtNxdIG7oyN3GP_d66tt1ENXp5v1mTTy5q-b45-dRnXuuwDzjqJmlUfw4rPyeEeHYmu69GxSkjWugMY0K3CzVV5O-us1ZToWk7U08AdK9cIpZ7qnrSsrTz7C6JTZtdchWEW21bCEKdTY6IxgPykyFknAlLAHLOO1s0_cQm7AHe-RvKdGgBGU5v8lF3Ky69GTj71Tl_Ncvy3bsQ4TfyWro3LHmNFN8WJwN9YDLy01FntE8C3j8VMH3CgJAdJAZuZVPVngroQmAzjeqnQdIJ4cZ-RHBS2C82RdYL3ICKyFEn2nFM8XL4F7Z9Ew399NBdJUU-0Qux8yVT45_Zz5lhacHANGlSCeszX4Q1nsBK9HHBch85NaaG5Tb6k4ew0-Tk=w540-h924-no?authuser=0"
          alt=""
        />
        <h1>Sign in</h1>
        <p>scs.slack</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
