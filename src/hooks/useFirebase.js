import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInitialize from "../firebase/firebase.init";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  //google sign in
  const signInWithGoogle = () => {
   return signInWithPopup(auth, googleProvider)
  };

  //   on auth change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  // google signout
 const logout=()=>{
  signOut(auth).then(() => {
    setUser({})
  });
 }

  //returning
  return {
    user,
    signInWithGoogle,
    logout
  };
};

export default useFirebase;
