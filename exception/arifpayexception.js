function ArifpayException(message) {
    this.message = message;
    // Use V8's native method if available, otherwise fallback
    this.stack = (new Error()).stack;
}

ArifpayException.prototype = Object.create(Error.prototype);
ArifpayException.prototype.name = "ArifpayException";
ArifpayException.prototype.constructor = ArifpayException;


module.exports = ArifpayException;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.ArifpayException = ArifpayException;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = ArifpayException;