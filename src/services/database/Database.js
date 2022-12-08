import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
export class Database {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "doors-shop-9c2ec.firebaseapp.com",
      projectId: "doors-shop-9c2ec",
      storageBucket: "doors-shop-9c2ec.appspot.com",
      messagingSenderId: "605600454092",
      appId: process.env.APP_ID,
      measurementId: "G-CLX8EVGGZ4",
    };

    this.app = initializeApp(this.config);
    this._database = getFirestore(app);
  }

  create(collectionKey, body) {
    const collectionRef = collection(this._database, collectionKey);
    return addDoc(collectionRef, body);
  }
  read(collectionKey) {
    const collectionRef = collection(this._database, collectionKey);
    return getDocs(collectionRef).then((documents) => {
      return documents.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    });
  }

  update(collectionKey, id, body) {
    const document = doc(this._database, collectionKey, id);
    return updateDoc(document, body);
  }

  delete(collectionKey, id) {
    const document = doc(this._database, collectionKey, id);
    return deleteDoc(document);
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
