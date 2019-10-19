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
      { id: 1000, department: 'First Department', product: 'First Product', price: 1000 },
      { id: 2000, department: 'Second Department', product: 'Second Product', price: 2000 }
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
          .that.has.lengthOf(8);

        expect(responseBody[0])
          .to.be.an('object')
          .that.includes({ id: 1000, department: 'First Department', product: 'First Product', price: 1000 });

        expect(responseBody[1])
          .to.be.an('object')
          .that.includes({ id: 2000, department: 'Second Department', product: 'Second Product', price: 2000 });

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
      id: 3000,
      department: 'Third Department',
      product: 'Third Product',
      price: 3000
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
