import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDGXa_Yysu-sUCjA15CS_b39c1rtnUggwo",
    authDomain: "clases-3d82b.firebaseapp.com",
    projectId: "clases-3d82b",
    storageBucket: "clases-3d82b.appspot.com",
    messagingSenderId: "670193118183",
    appId: "1:670193118183:web:e8121ad621d5ccc25b6b42"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()