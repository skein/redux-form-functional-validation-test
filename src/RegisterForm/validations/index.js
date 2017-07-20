import { Either } from 'ramda-fantasy';
const { Left, Right } = Either;

const emailTest = new RegExp('.+\@.+\..+'); // very simple regex for testing.

const strongPasswordTest = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])');

export const isEmail = values => field =>
    (field in values && !emailTest.test(values[field]) && Left('is not a valid email')) || Right(undefined);

export const isEmpty = values => field =>
    (!values[field] && Left('Field can not be empty')) || Right(undefined);

export const isShort = values => field =>
    (field in values && values[field].length < 8 && Left('Field needs to be at least 8 characters long')) || Right(undefined);

export const matchField = values => matchField => field => 
    (field in values && values[matchField] && values[field] !== values[matchField] && Left(`Field does not match ${matchField} field`)) || Right(undefined);

// RegEx is just for example. I know it's wrong.
export const isSecure = values => field =>
    (field in values && !strongPasswordTest.test(values[field]) && Left('Password is not secure enough (at least 1 small, 1 big character and a number)')) || Right(undefined);