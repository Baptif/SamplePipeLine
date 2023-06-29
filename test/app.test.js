const request = require('supertest');
const app = require('../app.js');

describe('Test des endpoints', () => {
    it('GET / devrait renvoyer "Hello World world!"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Hello World world!');
    });
});