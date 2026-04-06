import { auth, db } from "./firebase/init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "firebase/auth";
import {collection, addDoc} from 'firebase/firestore'
import Nav from "./components/CvCover";

function App() {

  

  return (
    <Nav />
  );
}

export default App;
