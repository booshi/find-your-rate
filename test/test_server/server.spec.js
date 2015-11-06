'use strict'

var request = require('supertest');


describe('loading express', function () {
    var server;
    beforeEach(function () {
        server = require('./../../server', { bustCache: true });
    });

    afterEach(function (done) {
        server.close(done());
    });

    it('404 everything else', function testPath(done) {
        request(server)
            .get('/foo/bar')
            .expect(404,done);
    });


    it.skip('gets from /loanOffers/loanApplication ', function testRates(done) {
        this.timeout(30000);
        var user = {name:'testUser',email:'b@c.d',creditscore:700,amount:5001};
        request(server)
            .post('/loanOffers/rates')
            .send(user)

        request(server)
            .get('/loanOffers/loanApplication/b@c.d')
            .expect(200,done);

 });

});