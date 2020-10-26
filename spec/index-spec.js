const mongoUnit = require('mongo-unit');
const request = require('supertest');
let app;

describe('Server', () => {
  beforeAll((done) => {
    mongoUnit.start().then((testMongoUrl) => {
      process.env.MONGODB_URL = testMongoUrl;
      process.env.PORT = 3002;
      app = require('../index');
      done();
    });
  });

  afterAll((done) => {
    mongoUnit.drop();
    app.close();
    done();
  });

  describe('is working properly', () => {
    it('should return a status code of 200 on /api/v1/ (home route)', (done) => {
      request(app)
        .get('/api/v1')
        .expect(200)
        .end((error) => {
          if (error) done.fail(error);
          else done();
        });
    });
  });
});
