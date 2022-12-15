import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { cloudService } from "./Cloud";

class Storage {
  constructor() {
    this.storage = getStorage(cloudService.app);
  }

  uploadImg(file) {
    const fileRef = ref(this.storage, `/imgitems/${file.name}`);
    return uploadBytes(fileRef, file);
  }

  getDownloadURL(ref) {
    return getDownloadURL(ref);
  }
}

export const storageService = new Storage();
