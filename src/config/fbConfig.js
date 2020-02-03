import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCiSmK1u51QRIazs_SZXtApoWZppb3hBaw",
    authDomain: "marioplan-27fb6.firebaseapp.com",
    databaseURL: "https://marioplan-27fb6.firebaseio.com",
    projectId: "marioplan-27fb6",
    storageBucket: "marioplan-27fb6.appspot.com",
    messagingSenderId: "485417895766",
    appId: "1:485417895766:web:762fcb4cf06ab30e6ef8f7",
    measurementId: "G-3WSC2R14GH"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase; 