import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDUL7m84hAYzGZ-5ull3giu76cDLo7ZIpg",
  authDomain: "misclases-2b911.firebaseapp.com",
  projectId: "misclases-2b911",
  storageBucket: "misclases-2b911.appspot.com",
  messagingSenderId: "992565666510",
  appId: "1:992565666510:web:8c4814b27bbdc23d05669f",
  measurementId: "G-GSCSRXYVR6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()

