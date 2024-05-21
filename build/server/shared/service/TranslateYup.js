"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
(0, yup_1.setLocale)({
    mixed: {
        required: 'This field is required',
        notType: 'Entered format is invalid',
        defined: 'This field must have a defined value',
        oneOf: 'Must be one of the following values: ${values}',
        notOneOf: 'Cannot be one of the following values: ${values}',
    },
    string: {
        lowercase: 'Must be capitalized',
        uppercase: 'Must be lowercase',
        url: 'Must have a valid URL format',
        max: 'Must be at most ${max} characters',
        min: 'Must be at least ${min} characters',
        email: 'Entered email format is not valid',
        length: 'Must be exactly ${length} characters',
        uuid: 'Entered value does not match a valid UUID',
        trim: 'Must not contain spaces at the beginning or end',
        matches: 'Value must match pattern: ${regex}',
    },
    number: {
        min: 'Must be at least ${min}',
        max: 'Must be a maximum of ${max}',
        integer: 'Must be an integer',
        lessThan: 'Must be less than ${less}',
        moreThan: 'Must be greater than ${more}',
        positive: 'Must be a positive number',
        negative: 'Must be a negative number',
    },
    date: {
        min: 'Must be greater than date ${min}',
        max: 'Must be less than date ${max}',
    },
    array: {
        min: 'Must have at least ${min} items',
        max: 'Must contain at most ${max} items',
        length: 'Must contain exactly ${length} items',
    },
    object: {
        noUnknown: 'Must be passed a defined value',
    }
});
