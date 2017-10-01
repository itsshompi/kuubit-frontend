import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyC3-4YtYtKk-Rc-KL9-PjrHUAZOWSDEGzg",
    authDomain: "kuubitcom.firebaseapp.com",
    databaseURL: "https://kuubitcom.firebaseio.com",
    projectId: "kuubitcom",
    storageBucket: "kuubitcom.appspot.com",
    messagingSenderId: "1091108556906"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
