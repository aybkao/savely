const expect = require('chai').expect;
const Profile = require('../../db/models/profiles.js');

describe('PROFILES', function () {

  it('Should be able to retrieve test data', function (done) {
    Profile.forge().fetchAll()
      .then(function (results) {
        expect(results.at(0).get('id')).to.equal(1);
        done();
      })
      .catch(function (err) {
        // If this expect statement is reached, there's an error.
        done(err);
      });
  });

  it('Should be able to update an already existing record', function (done) {
    Profile.where({ id: 1 }).fetch()
      .then(function (result) {
        expect(..result.get('id')).to.equal(1);
      })
      .then(function () {
        return Profile.where({ id: 1 }).save({ first: 'James', last: 'Davenport' }, { method: 'update' });
      })
      .then(function () {
        return Profile.where({ id: 1 }).fetch();
      })
      .then(function (result) {
        expect(result.get('first')).to.equal('James');
        expect(result.get('last')).to.equal('Davenport');
        done();
      })
      .catch(function (err) {
        // If this expect statement is reached, there's an error.
        done(err);
      });
  });

});
