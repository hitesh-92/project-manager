import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
apiKey: "AIzaSyCzH2LNWbAnnU9NCyKfkPIGIojRYuTta_8",
authDomain: "project-manager-53365.firebaseapp.com",
databaseURL: "https://project-manager-53365.firebaseio.com",
projectId: "project-manager-53365",
storageBucket: "project-manager-53365.appspot.com",
messagingSenderId: "475852031000"
};
firebase.initializeApp(config);

firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase