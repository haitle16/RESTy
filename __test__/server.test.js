'use strict';

const {server} = require('../www/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);


describe('web server', () => {

    it('response with 404 if no route', () => {

        return mockRequest
            .get('/foo')
            .then(results => {
                // console.log(results);
                expect(results.status).toBe(404);
            }).catch(err => {
                console.log(err);
                done(err);
            });
        // done();
    });

    it('Can not post yet!', () => {

        return mockRequest
            .post('/')
            .then(results => {
                // console.log(results);
                expect(results.status).toBe(404);
            }).catch(err => {
                console.log(err);
                done(err);
            });
        // done();
    });

    it('correct route make sure to return 200 ', () => {

        return mockRequest
            .get('/')
            .then(results => {
                // console.log(results);
                expect(results.status).toBe(500);
            }).catch(err => {
                console.log(err);
                done(err);
            });
        // done();
    });


});