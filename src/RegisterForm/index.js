import React from 'react';
import { Field, reduxForm } from 'redux-form';
import * as validators from './validationCollections';

const validatorMap = values => ({
    email: validators.validateEmail(values),
    emailConfirm: validators.validateConfirmEmail(values)('email'),
    password: validators.validatePassword(values),
});

const validate = values => {
    const validators = validatorMap(values);
    const errors = Object.keys(validators)
        .map(field => validators[field](field))
        .filter(error => error)
        .reduce((acc, error) => {
            acc[error.field] = error.error;
            return acc;
        }, {});
    return errors;
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error &&
          <div>
            {error}
          </div>) ||
          (warning &&
            <span>
              {warning}
            </span>))}
    </div>
  </div>

const RegisterForm = (props) => {
    const { handleSubmit } = props;
    return (<form onSubmit={handleSubmit((values) => console.log(values))}>
        <div>
            <div><label>Email</label></div>
            <Field 
                component={renderField}
                type="text"
                name="email"
            />
        </div>
        <div>
            <div><label>Confirm Email</label></div>
            <Field 
                component={renderField}
                type="text"
                name="emailConfirm"
            />
        </div>
        <div>
            <div><label>Password</label></div>
            <Field 
                component={renderField}
                type="password"
                name="password"
            />
        </div>
        <button type="submit">Submit</button>
    </form>);
    
}

const ReduxRegisterForm = reduxForm({
    form: 'registration',
    validate,
})(RegisterForm);

export default ReduxRegisterForm;