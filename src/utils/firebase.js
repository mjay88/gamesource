import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB-oUQaeRPsrzBZ-uCFRFD73zHd_bKxiyA",
	authDomain: "gamesource-1573a.firebaseapp.com",
	projectId: "gamesource-1573a",
	storageBucket: "gamesource-1573a.appspot.com",
	messagingSenderId: "86522590254",
	appId: "1:86522590254:web:f4a1aca0ffd0ffcd761bbf",
	measurementId: "G-Z0NHKNT21N",
};

initializeApp(firebaseConfig);

const DB = getFirestore();
const AUTH = getAuth();

export { DB, AUTH };
