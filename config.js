import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDnqxFyL9IE9KVIb1d0nMIYxxb-CvxFdVg",
  authDomain: "story-hub-732c3.firebaseapp.com",
  projectId: "story-hub-732c3",
  storageBucket: "story-hub-732c3.appspot.com",
  messagingSenderId: "1075971198373",
  appId: "1:1075971198373:web:9c1dd753baf236da9fec4c",
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
