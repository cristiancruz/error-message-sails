# Error message sails
## Installation
- ` npm install error-message-sails `
## Use
- ` const {errorMessageCustom} = require('error-message-sails');  ` 
- ` errorMessageCustom.onlyErrors(errorCodeSails);`
- ` errorMessageCustom.completeError(errorSails)`
## Code error base:
- ` E_NOOP `
- ` E_INVALID_META `
- ` E_INVALID_CRITERIA `
- ` E_INVALID_POPULATES `
- ` E_INVALID_NUMERIC_ATTR_NAME `
- ` E_INVALID_STREAM_ITERATEE `
- ` E_INVALID_NEW_RECORD `
- ` E_INVALID_NEW_RECORDS `
- ` E_INVALID_VALUES_TO_SET `
- ` E_INVALID_TARGET_RECORD_IDS `
- ` E_INVALID_COLLECTION_ATTR_NAME `
- ` E_INVALID_ASSOCIATED_IDS `
- ` npm install error-message-sails `
## Example results:
 ```json
 // Option 1
 { "msg": "Datos invalidos para actualizar", "error_code": 400 }

//  Option 2
{
    "cause": {
        "name": "UsageError",
        "code": "E_INVALID_NEW_RECORD",
        "details": "Missing value for required attribute `name`.  Expected a string, but instead, got: undefined"
    },
    "isOperational": true,
    "code": "E_INVALID_NEW_RECORD",
    "details": "Missing value for required attribute `name`.  Expected a string, but instead, got: undefined",
    "traducction": {
        "msg": "Datos iniciales no válidos para el nuevo registro.",
        "error_code": 400
    }
}
 ```