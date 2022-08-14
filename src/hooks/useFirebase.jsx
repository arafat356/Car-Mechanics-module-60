import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  unsubscribed,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const useFirebase = () => {
  const [user, setUser] = useState({});
  // GoogleSignIn
  const auth = getAuth();
  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    // Show Popup
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };
  // onAuthStateChanged
  //   observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  // signOut
  const logOut = () => {
    signOut(auth).then(() => {});
  };

  //   here's return
  return {
    user,
    signInUsingGoogle,
    logOut,
  };
};
