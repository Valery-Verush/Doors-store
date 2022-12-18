class LocalStorageService {
  constructor() {
    this.storage = window.localStorage;
  }

  dispatchEvent(key) {
    const event = new CustomEvent("storage", {
      detail: key ? { key, value: this.getItem(key) } : null,
      bubbles: true,
    });
    window.dispatchEvent(event);
  }

  getItem(key) {
    try {
      return JSON.parse(this.storage.getItem(key));
    } catch (error) {
      console.error(error.message);
    }
  }

  setItem(key, value) {
    try {
      const existedValue = this.getItem(key);
      if (existedValue) {
        if (Array.isArray(existedValue)) {
          this.storage.setItem(
            key,
            JSON.stringify([...value, ...existedValue])
          );
        }
      } else {
        this.storage.setItem(key, JSON.stringify(value));
      }

      this.dispatchEvent(key);
    } catch (error) {
      console.error(error.message);
    }
  }

  removeItem(key) {
    this.storage.removeItem(key);
    this.dispatchEvent(key);
  }

  clear() {
    this.storage.clear();
    this.dispatchEvent();
  }
}

const localStorageService = new LocalStorageService();
export default localStorageService;
