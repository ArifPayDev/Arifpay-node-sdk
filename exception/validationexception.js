function ValidationException(message) {
    this.message = message;
    // Use V8's native method if available, otherwise fallback

    this.stack = (new Error()).stack;
}

ValidationException.prototype = Object.create(ArifpayException.prototype);
ValidationException.prototype.name = "ValidationException";
ValidationException.prototype.constructor = ValidationException;



module.exports = ValidationException;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.ValidationException = ValidationException;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = ValidationException;