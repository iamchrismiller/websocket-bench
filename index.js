/*global module, require*/

module.exports = {

  //Constructors
  Benchmark : require('./lib/benchmark'),
  DefaultReporter : require('./lib/defaultreporter'),
  Monitor : require('./lib/monitor'),
  Steps : require('./lib/steps'),
  StopWatch : require('./lib/stopwatch'),
  Worker : require('./worker'),

  //Static Methods
  generator : require('./lib/generator'),
  logger : require('./lib/logger'),

  workers : {
    BaseWorker : require('./lib/workers/baseworker'),
    FayeWorker : require('./lib/workers/fayeworker'),
    PrimusWorker : require('./lib/workers/primusworker'),
    SocketIOWorker : require('./lib/workers/socketioworker')
  }
};