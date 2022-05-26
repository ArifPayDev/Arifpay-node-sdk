'use strict';
/* jshint node: true */
//https://gateway.arifpay.net/v0/
const DEFAULT_HOST = 'https://gateway.arifpay.net';
const DEFAULT_BASE_PATH = '/v0';

const DEFAULT_TIMEOUT = 8000;

const axios = require('axios').default
const Checkout = require('./checkout')

Arifpay.PACKAGE_VERSION = require('./package.json').version;

function Arifpay(key, config = {}) {
    if (!(this instanceof Arifpay)) {
        return new Arifpay(key, config);
    }

    const props = this._getPropsFromConfig(config);

    this.VERSION = Arifpay.PACKAGE_VERSION;

    this._httpClient = axios.create({
        baseURL: `${DEFAULT_HOST}${DEFAULT_BASE_PATH}`,
        timeout: DEFAULT_TIMEOUT,
        headers: {
            'x-arifpay-key': key
        }
    });
}


Arifpay.prototype = {
    _getPropsFromConfig: function (config) {},
    checkout: new Checkout(Arifpay._httpClient)
}

module.exports = Arifpay;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Arifpay = Arifpay;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = Arifpay;