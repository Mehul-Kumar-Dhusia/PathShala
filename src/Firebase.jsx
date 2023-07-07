import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBy2_CIayYkZQzXmeKAfVCSoULnUn96EG8",
  authDomain: "grocery-list-dac7a.firebaseapp.com",
  databaseURL: "https://grocery-list-dac7a-default-rtdb.firebaseio.com",
  projectId: "grocery-list-dac7a",
  storageBucket: "grocery-list-dac7a.appspot.com",
  messagingSenderId: "389983319251",
  appId: "1:389983319251:web:52418f49d0345f947d9026"
};

export const app = initializeApp(firebaseConfig);