const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const db = require('../models');
const expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

let request;

describe('GET /api/items', function () {
  // Before each test begins, create a new request server for testing
  // & delete all items from the db
  beforeEach(function () {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should find all items', function (done) {
    // Add some items to the db to test with
    db.Item.bulkCreate([
      { text: 'First Item', description: 'First Description' },
      { text: 'Second Item', description: 'Second Description' }
    ]).then(function () {
      // Request the route that returns all items
      request.get('/api/items').end(function (err, res) {
        const responseStatus = res.status;
        const responseBody = res.body;

        // Run assertions on the response

        // eslint-disable-next-line no-unused-expressions
        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an('array')
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an('object')
          .that.includes({ text: 'First Item', description: 'First Description' });

        expect(responseBody[1])
          .to.be.an('object')
          .that.includes({ text: 'Second Item', description: 'Second Description' });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});

describe('POST /api/items', function () {
  // Before each test begins, create a new request server for testing
  // & delete all items from the db
  beforeEach(function () {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should save an item', function (done) {
    // Create an object to send to the endpoint
    const reqBody = {
      text: 'Item text',
      description: 'Item description'
    };

    // POST the request body to the server
    request
      .post('/api/items')
      .send(reqBody)
      .end(function (err, res) {
        const responseStatus = res.status;
        const responseBody = res.body;

        // Run assertions on the response

        // eslint-disable-next-line no-unused-expressions
        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an('object')
          .that.includes(reqBody);

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
});
