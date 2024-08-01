/**
 * sugon.js: main entry point for the sugon library
 * @module sugon
 * @license MIT
 */

const sugon = exports;

sugon.client = require('./sugon/cli');

exports.version = require('../package').version;
