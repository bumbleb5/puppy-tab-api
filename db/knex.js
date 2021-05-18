module.exports = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './db/puppytab-db.sqlite3'
    },
    useNullAsDefault: true
});