import * as validations from '../validations';


export const validateEmail = values => field => 
    validations.isEmpty(values)(field)
        .chain(() => validations.isEmail(values)(field))
        .either(
            error => ({field, error}),
            () => undefined,
        );

export const validateConfirmEmail = values => matchField => field =>
    validations.isEmpty(values)(field)
        .chain(() => validations.isEmail(values)(field))
        .chain(() => validations.matchField(values)(matchField)(field))
        .either(
            error => ({field, error}),
            () => undefined,
        );

export const validatePassword = values => field =>
    validations.isEmpty(values)(field)
        .chain(() => validations.isShort(values)(field))
        .chain(() => validations.isSecure(values)(field))
        .either(
            error => ({field, error}),
            () => undefined,
        );
