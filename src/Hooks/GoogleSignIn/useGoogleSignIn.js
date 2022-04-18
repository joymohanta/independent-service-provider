import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const useGoogleSignIn = () => {
  const [signInWithGoogle, user2, error2] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (error2) {
    return (
      <div>
        <p className="text-danger">Error: {error2.message}</p>
      </div>
    );
  }
  if (user2) {
    navigate("/checkout");
  }

  return { signInWithGoogle, user2, error2 };
};

export default useGoogleSignIn;
