import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { FacebookAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);






const AuthProvider = ({ children }) => {

    const auth = getAuth(app);


    const GoogleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [collegeData, setCollegeData] = useState([]);

    const  facebookProvider = new FacebookAuthProvider();




    const createUser = (email, password) => {

        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)

    };


    const updateUserProfile = (name) => {


        return updateProfile(auth.currentUser, {
            displayName: name
        })

    }
    const login = (email, password) => {

        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)

    };

    const googleLogin = () => {

        setLoading(true)

        return signInWithPopup(auth, GoogleProvider)
    };


    const facebookLogin = () => {

        setLoading(true)

        return signInWithPopup(auth, facebookProvider)
    };







    const resetPassword=(email)=>{

        return  sendPasswordResetEmail(auth,email)
    }

    const logOut = () => {

        setLoading(true)

        return signOut(auth)

    };

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setLoading(false)
             setUser(currentUser)
             console.log(currentUser)

        });

        return () => {

            return unSubscribe();
        }


    }, [])


    // dark mode start
    const [mode, setMode] = useState(localStorage.getItem('mode') === 'dark' || false);

    // Update the local storage and mode when the user changes the mode.
    const handleCheckboxChange = () => {
      const newMode = !mode;
      setMode(newMode);
      localStorage.setItem('mode', newMode ? 'dark' : 'light');
    };
  
    // Add an effect to update the mode state when the component mounts.
    useEffect(() => {
      const storedMode = localStorage.getItem('mode');
      if (storedMode) {
        setMode(storedMode === 'dark');
      }
    }, []);
    //  dark mode end


    const authInfo = {
        createUser,
        updateUserProfile,
        login,
        googleLogin,
        resetPassword,
        logOut,
        user,
        loading,
        collegeData,
        setCollegeData,
        facebookLogin,
        mode,
        setMode,handleCheckboxChange 
    }
    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;