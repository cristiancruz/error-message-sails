'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var errorMessageCustom = exports.errorMessageCustom = {
    onlyErrors: function onlyErrors(code) {
        var msg = null;
        var error_code = 500;
        switch (code) {
            case 'E_NOOP':
                msg = "Query is a no-op.";
                break;
            case 'E_INVALID_META':
                msg = "Valor inválido proporcionado.";
                error_code = 400;
                break;
            case 'E_INVALID_CRITERIA':
                msg = "Consulta inválido.";
                break;
            case 'E_INVALID_POPULATES':
                msg = "Relacion llamada invalida.";
                break;
            case 'E_INVALID_NUMERIC_ATTR_NAME':
                msg = "Nombre attr numérico inválido.";
                break;
            case 'E_INVALID_STREAM_ITERATEE':
                msg = "Función iteradora inválida.";
                break;
            case 'E_INVALID_NEW_RECORD':
                msg = "Datos iniciales no válidos para el nuevo registro.";
                error_code = 400;
                break;
            case 'E_INVALID_NEW_RECORDS':
                msg = "Datos iniciales no válidos para el nuevo registro.";
                error_code = 400;
                break;
            case 'E_INVALID_VALUES_TO_SET':
                msg = "Datos invalidos para actualizar";
                error_code = 400;
                break;
            case 'E_INVALID_TARGET_RECORD_IDS':
                msg = "ID de registro de destino inválido";
                break;
            case 'E_INVALID_COLLECTION_ATTR_NAME':
                msg = "Nombre attr de la colección no válida";
                break;
            case 'E_INVALID_ASSOCIATED_IDS':
                msg = "ID asociado no válido";
                break;
            default:
                msg = "No se tiene referencia del código de error";
                break;
        }
        return { msg: msg, error_code: error_code };
    },
    completeError: function completeError(error) {
        var traducction = errorMessageCustom.onlyErrors(error.code);
        var errorFull = _extends({}, error, { traducction: traducction });
        return errorFull;
    }
};