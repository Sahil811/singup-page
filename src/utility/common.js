export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const validate = (name, value) => {
  switch (name) {
    case "name":
      if (!value || value.trim() === "") {
        return "Name is Required";
      } else {
        return "";
      }
    case "email":
      if (!value) {
        return "Email is Required";
      } else if (!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
        return "Enter a valid email address";
      } else {
        return "";
      }
    case "password":
      if (!value) {
        return "Password is Required";
      } else if (value.length < 6) {
        return "Password must be at least 6 characters long.";
      } else if (!value.match(/[a-z]/g)) {
        return "Please enter at least lower character.";
      } else if (!value.match(/[A-Z]/g)) {
        return "Please enter at least upper character.";
      } else if (!value.match(/[0-9]/g)) {
        return "Please enter at least one digit.";
      } else {
        return "";
      }
    default: {
      return "";
    }
  }
};
