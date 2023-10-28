const app = require('../index')
const request = require('supertest');


describe('Get Users', () => {
    test('Get All Users', (done) => {
        request(app)
            .get('/users')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe('success')
                done()
            })
            .catch(done)
    });

    describe('Delete User', () => {
        test('Delete a User', (done) => {
            request(app)
                .delete('/users/1') 
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                    expect(response.body.message).toBe('Users deleted success')
                    done()
                })
                .catch(done)
        });
    });
    
    describe('Get User by ID', () => {
        test('Get User by ID', (done) => {
            request(app)
                .get('/users/1')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                    expect(response.body.message).toBe('success')
                    done()
                })
                .catch(done)
        });
    });
    
    
});
