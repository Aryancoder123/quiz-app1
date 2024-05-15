import { auth } from "./firebase";
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword} from 'firebase/auth'


export const createUserr = async (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
}

export const signIn1 = async (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);
}

export const singIn2 = async() =>{
    const provider = new GoogleAuthProvider(auth,provider);
    const result = await signInWithPopup(auth,provider);

    return result;
}

export const signOut1 = () =>{
    return auth.signOut();
}

 