const expect = require('chai').expect;
const models = require('../models');
const index = require('../index.js');

describe('DATABASE & QUERIES', function(done) {

  var dbSettings = index.Collection.query().client.connectionSettings;
  var clientSettings = index.Collection.query().client.config;

  it('postgreSQL should be connected and running through port 5342', function() {
    expect(clientSettings.client).to.equal('postgresql');
    expect(dbSettings.port).to.equal('5432');
  });

  it('target database should be "thesis"', function() {
    expect(dbSettings.database).to.equal('thesis');
    expect(dbSettings.user).to.equal('postgres');
  });

  it('database should have Auth, Budget, Profile, and Transaction models', function() {
    expect(models.Auth).to.be.a('function');
    expect(models.Budget).to.be.a('function');
    expect(models.Profile).to.be.a('function');
    expect(models.Transaction).to.be.a('function');
  });

  it('each model should be connected to their corresponding "Thesis" tables', function() {
    expect(models.Auth.extend().__super__.tableName).to.equal('auths');
    expect(models.Budget.extend().__super__.tableName).to.equal('budgets');
    expect(models.Profile.extend().__super__.tableName).to.equal('profiles');
    expect(models.Transaction.extend().__super__.tableName).to.equal('transactions');
  });

});
