import app from 'firebase/app';
import 'firebase/auth';


const config = {  
    apiKey: "AIzaSyBMV1oqBv5FwqxS0rmLaen9K0KtZIgti7A",
    authDomain: "react-firebase-authentic-96898.firebaseapp.com",
     databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: "react-firebase-authentic-96898",
    storageBucket: "react-firebase-authentic-96898.appspot.com",
    messagingSenderId: "238049515325",
    appId: "1:238049515325:web:e362877b2eab45ae1a5754",
    measurementId: "G-VCVXP6SV14",
 };

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth()
    }

    //*** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    //***doSignInWithEmailAndPassword */
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    
    doSignOut = () => this.auth.signOut()
    
    doPasswordRest = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)
}
export default Firebase;
