import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAs0M9mTnbpX_B44q6ywYuQCyVuGIbzDGk",
	authDomain: "linkedin-clone-91271.firebaseapp.com",
	projectId: "linkedin-clone-91271",
	storageBucket: "linkedin-clone-91271.appspot.com",
	messagingSenderId: "473323703415",
	appId: "1:473323703415:web:8d6789310916c11fe5ca72",
	measurementId: "G-K46BQC8ZSE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
