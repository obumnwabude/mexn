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

  afterAll(async (done) => {
    try {
      await mongoUnit.drop();
      await app.close();
      done();
    } catch (error) {
      done();
    }
  });

  describe('is working properly', () => {
    it('should return a status code of 200 on /api/v1/ (home route)', (done) => {
      request(app)
        .get('/api/v1')
        .expect(200)
        .then(done)
        .catch(done.fail);
    });
  });
});
