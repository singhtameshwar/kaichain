export const regex = {
    wholeNumber: /^\d+$/,
    decimalNumber: /^\d*\.\d+$/,
    wholeNumberAndDecimalNumber: /^\d*(\.\d+)?$/,
    alphanumericWithOutSpace: /^[a-zA-Z0-9]*$/,
    alphanumericWithSpace: /^[a-zA-Z0-9 ]*$/,
    email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    passwordStrengthModerate: /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,
    passwordStrengthComplex : /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/  ,
    alphanumericString: /^[a-z0-9_-]{3,16}$/,
    date: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
    time24Hour: /^$|^(([01][0-9])|(2[0-3])):[0-5][0-9]$/,
    time12Hour: /^(0?[1-9]|1[0-2]):[0-5][0-9]$/,
    filePathWithFileNameAndExtension: /((\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/,
    englishAndFinnishCharacters: /^[a-zA-ZÀ-ÿ ]+$/,
    isNotEmpty : /^\s*\S+.*/
}
{/*   

wholenumber : accepts whole numbers only
decimalnumbers : accepts decimal numbers only
wholenumberanddecimalnumber : accepts whole number and decimal numbers
alphanumericWithOutSpace : accepts alphanumeric keywords without space
email : accepts string having email
passwordStrengthModerate : Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
passwordStrengthComplex :  1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
alphanumericString :  may include _ and – having a length of 3 to 16 characters
date : date in format YYYY-MM-DD
time24Hour : HH:MM 24 hour format
time12Hour : HH:MM 12 hour format
filePath : filepath string
englishandfinnishcharacters : accepts english and finnish characters
isNotEmpty : If string is empty , condition will not be true

*/}