/*global module, require*/

var BaseWorker = require('./baseworker.js'),
  Primus = require('primus'),
  http = require('http'),
  util = require('util'),
  logger = require('../logger.js');

var PrimusWorker = function (server, generator, transformer, verbose) {
  PrimusWorker.super_.apply(this, arguments);

  // Create a primus instance in order to obtain the client constructor.
  this.PrimusClient = new Primus(http.createServer(), {'transformer' : transformer}).Socket;
};

util.inherits(PrimusWorker, BaseWorker);

PrimusWorker.prototype.createClient = function (callback) {
  var self = this,
    client = new this.PrimusClient(this.server);

  client.on('open', function () {
    callback(false, client);
  });

  client.on('error', function (err) {
    if (self.verbose) {
      logger.error("Primus Worker error" + JSON.stringify(err));
    }

    callback(true, client);
  });

  return client;
};

module.exports = PrimusWorker;