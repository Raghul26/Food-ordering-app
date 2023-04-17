// firebase config key setup
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// your web app's firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDrXLED-41lNcf2HD2Ex-7Om2AYPv2J6k",
    authDomain: "food-ordering-app-8777c.firebaseapp.com",
    projectId: "food-ordering-app-8777c",
    storageBucket: "food-ordering-app-8777c.appspot.com",
    messagingSenderId: "763136430658",
    appId: "1:763136430658:web:6ce8909a81c01c9f5d93db",
    measurementId: "G-SDW6K191BD"
}
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }
firebase.initializeApp(firebaseConfig);
export default firebase;