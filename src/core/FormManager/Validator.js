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

  static phone(message) {
    return (value) => {
      const regExp = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
      if (!regExp.test(value)) {
        return {
          message,
        };
      }

      return {};
    };
  }

  static required(message) {
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
