const notEqualsZero = value => {
  if (value) {
    if (value.length !== 0) return true;
    else return false;
  } else return false;
};

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

const phoneNumber = value => {
   value && !/^[0-9]{2,4}$/i.test(value)
    ? 'Invalid phoneNumber address'
    : undefined;
};

const validPassword = value =>
  value && !/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/.test(value)
    ? 'Password sholud be min 6 character, atleast one uppercase character, alteast one lowercase character and altleast one special character'
    : undefined;


const validationText = value => {
  if (value && value.trim().length > 0) {
    return /[^a-zA-Z0-9 ]{3,30}$/i.test(value)
      ? 'Please fill the field'
      : undefined;
  } else {
    return 'Please fill the field';
  }
};
const numberValidation = value =>
  value && !/^[0-9]{1,10}$/.test(value) ? 'Maximum 10 character only' : undefined;

const isAlphaNumeric = value => {
  return /^[0-9a-zA-Z+-/]+$/.test(value)
    ? undefined
    : 'Please enter valid character';
};

const convertUppercase = str => {
  console.log(str.toUpperCase());
  return str.toUpperCase();
};

const isNumeric = value => {
  return /^[0-9]+$/.test(value) ? undefined : 'Please enter valid number';
};


export {
  notEqualsZero,
  email,
  phoneNumber,
  validPassword,
  validationText,
  numberValidation,
  isAlphaNumeric,
  convertUppercase,
  isNumeric,
};
