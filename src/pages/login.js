import * as React from 'react';
import GoogleButton from 'react-google-button'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


export default function LoginPage({setUser}) {
    const navigate = useNavigate();
    function googleLoginHandler(props) {
        var provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setUser('logininfo', user, { path: '/' })
                navigate('/main')
            }).catch((error) => {
                console.log(error)
            });
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
            <GoogleButton
                style={{ marginTop: "40vh" }}
                onClick={() => { googleLoginHandler() }}
            />
        </div>
    );
}