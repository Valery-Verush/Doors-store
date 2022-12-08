import { initializeApp } from "firebase/app";

export class CloudService {
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
  }
}

export const cloudService = new CloudService();
