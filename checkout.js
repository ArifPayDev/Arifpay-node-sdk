function Checkout(httpclient) {
    this.httpclient = httpclient;
}

Checkout.prototype = {
    create: async function (data) {
        try {
            let response = await this.httpclient.post("/checkout/session");
            return response.data.data;
        } catch (error) {
            throw ArifpayException()
        }
    }
}

module.exports = Checkout;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Checkout = Checkout;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = Checkout;