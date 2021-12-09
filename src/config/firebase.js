import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
