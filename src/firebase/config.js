import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAp2YBee907eIBf4u4l41W0QnbCVYcQgls",
    authDomain: "jinstagram-5a5de.firebaseapp.com",
    projectId: "jinstagram-5a5de",
    storageBucket: "jinstagram-5a5de.appspot.com",
    messagingSenderId: "274223928815",
    appId: "1:274223928815:web:1c96682d38917e535f921a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectStorage, projectFirestore, timestamp }