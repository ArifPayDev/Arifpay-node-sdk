function ArifpayException(message) {
    this.message = message;
    // Use V8's native method if available, otherwise fallback
    if ("captureStackTrace" in Error)
        Error.captureStackTrace(this, InvalidArgumentException);
    else
        this.stack = (new Error()).stack;
}

ArifpayException.prototype = Object.create(Error.prototype);
ArifpayException.prototype.name = "ArifpayException";
ArifpayException.prototype.constructor = ArifpayException;