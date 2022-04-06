import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "../../firebase";

const signUserUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMsg = err.message;
      console.error(errorCode, errorMsg);
    });
};

const signUserIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMsg = err.message;
      console.error(errorCode, errorMsg);
    });
};

const signUserOut = () => {
  signOut(auth)
    .then(() => {
      console.log("User was signed out successfully");
    })
    .catch((err) => {
      console.error("user failed to sign in", err.message);
    });
};

export { signUserUp, signUserIn, signUserOut };
