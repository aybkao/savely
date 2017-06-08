const models = require('../models');

exports.seed = function (knex, Promise) {

  return models.Category.where({ profile_id: 1 }).fetch()
    .then((categories) => {
      if (category) {
        throw category;
      }
      return models.Category.forge({
        name: '',
        profile_id: 1,
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create category');
      throw err;
    })
    .then((profile) => {
      return models.Auth.forge({
        type: 'local',
        password: 'admin123',
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

