
var thunk = require('thunkify');
require('should');
var co = require(process.env.CO_MODULE || '..');
var fs = require('fs');

var read = thunk(fs.readFile);

describe('co(* -> yield [])', function(){
  it('should aggregate several thunks', function(done){
    co(function *(){
      var a = read(__dirname+'/../index.js', 'utf8');
      var b = read(__dirname+'/../Makefile', 'utf8');
      var c = read(__dirname+'/../package.json', 'utf8');

      var res = yield [a, b, c];
      res.should.have.length(3);
      res[0].should.include('exports');
      res[1].should.include('test');
      res[2].should.include('dependencies');
    })(done);
  })

  it('should noop with no args', function(done){
    co(function *(){
      var res = yield [];
      res.should.have.length(0);
    })(done);
  })
})