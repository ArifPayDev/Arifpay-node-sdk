function ValidationException(message) {
    this.message = message;
    // Use V8's native method if available, otherwise fallback
    if ("captureStackTrace" in Error)
        Error.captureStackTrace(this, InvalidArgumentException);
    else
        this.stack = (new Error()).stack;
}

ValidationException.prototype = Object.create(ArifpayException.prototype);
ValidationException.prototype.name = "ValidationException";
ValidationException.prototype.constructor = ValidationException;