// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAJ8sm1A8lN2ZhdoUAprPkrdYjAcYDSOas",

  authDomain: "attempt-52753.firebaseapp.com",

  projectId: "attempt-52753",

  storageBucket: "attempt-52753.appspot.com",

  messagingSenderId: "551547442446",

  appId: "1:551547442446:web:726fd12f42abd00c37b35f",

  measurementId: "G-QSJ1WYLH28"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

import firebase from 'firebase'
import { createApp } from 'vue'
import App from './App.vue'



import './assets/main.css'


createApp(App).mount('#app')
