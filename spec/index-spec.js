const mongoUnit = require('mongo-unit');
const request = require('supertest');
let app;

describe('Server', () => {
  beforeEach((done) => {
    mongoUnit.start().then((testMongoUrl) => {
      process.env.MONGODB_URL = testMongoUrl;
      process.env.PORT = 3002;
      app = require('../index');
      done();
    });
  });

  afterEach(() => mongoUnit.drop());

  afterAll(() => app.close());

  describe('is working properly', () => {
    it('should return a status code of 200 on / (home route)', () => {
      request(app).get('/').expect(200);
    });
  });
});
