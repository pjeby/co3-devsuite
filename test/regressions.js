require('should');
var co = require(process.env.CO_MODULE || '..');
var assert = require('assert');

describe('bugs', function(){
  it('#92', function(done){
    require('domain').create()
    .once('error', function(err){
      err.message.should.equal('boom');
      done();
    }).run(function() { // start domain trapping

    co(function *() {
      yield function (done) {
        done(new Error('boom'))
      }
    })(function(err) {
      if (err) throw err;
    });
    
    }); // end domain trapping
  })
})
