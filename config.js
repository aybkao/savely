const config = {
  knex: {
    client: 'postgresql',
    connection: {
      database: 'thesis',
      user: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5432,
      url: ''
    }
  }, 
  pool: {
    min: 1, 
    max: 2 
  }
};