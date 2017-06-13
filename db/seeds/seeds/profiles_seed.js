// const models = require('../../models');
// const Promise = require('bluebird');
// const knex = require('knex');
// const profiles = [
//   {
//     first: 'A',
//     last: 'K',
//     display: 'AK',
//     email: 'ak@ak.ak'
//   },
//   {
//     first: 'John',
//     last: 'Doe',
//     display: 'Doe, John',
//     email: 'jdoe@jd.com'
//   }
// ];
// module.exports = () => Promise.all(profiles.map(profile => models.Profile.forge(profile).save()));

const models = require('../../models');

module.exports = function (knex, Promise) {

  return models.Profile.where({ email: 'q@q.q' }).fetch()
    .then((profile) => {
      if (profile) {
        throw profile;
      }
      return models.Profile.forge({
        first: 'q',
        last: 'q',
        display: 'qq',
        email: 'q@q.q'
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create profile');
      throw err;
    })
    .then((profile) => {
      return models.Auth.forge({
        type: 'local',
        password: 'q',
        profile_id: profile.get('id')
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create auth');
    })
    .catch(() => {
      console.log('WARNING: defualt user already exists.');
    });

};