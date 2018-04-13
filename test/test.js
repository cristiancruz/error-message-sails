const expect = require('chai').expect
const {errorMessageCustom} = require('../lib/src/errors');

describe('#errors', function(){
    it('Error E_INVALID_VALUES_TO_SET', function(){
		let result = errorMessageCustom.onlyErrors("E_INVALID_VALUES_TO_SET");
		let test = { msg: 'Datos invalidos para actualizar', error_code: 400 };
		expect(result).to.deep.equal(test)
		console.log(result);
	})
	it('Error sails & traduccion', function(){
		var error = {
			"cause": {
				"name": "UsageError",
				"code": "E_INVALID_NEW_RECORD",
				"details": "Missing value for required attribute `name`.  Expected a string, but instead, got: undefined"
			},
			"isOperational": true,
			"code": "E_INVALID_NEW_RECORD",
			"details": "Missing value for required attribute `name`.  Expected a string, but instead, got: undefined"
		}
		var result = {
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
		expect(result).to.deep.equal(errorMessageCustom.completeError(error))
		console.log(errorMessageCustom.completeError(error));
	})
})


