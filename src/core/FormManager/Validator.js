export class Validator {
  static email(message) {
    return (value) => {
      const regExp = /^(.+)@(.+)$/g;
      if (!regExp.test(value)) {
        return {
          message,
        };
      }

      return {};
    };
  }

  static required(message) {
    console.log("asd");
    return (value) => {
      if (value === "" || value === null || value === undefined) {
        return {
          message,
        };
      }

      return {};
    };
  }
}
