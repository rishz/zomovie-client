const Promise = require('bluebird');
const request = require('request-promise');
const moment = require('moment');

// Setup database
const { Pool } = require('pg');
const config = require('../../api/config/config');

const pool = new Pool({
    user: config.dbUser,
    host: config.dbHost,
    database: config.dbName,
    password: config.dbPassword,
    port: config.dbPort
});

addSeats = async () => {
    let b = '';
    for(let i=0; i<100; i++) b+='0';

    const results = await pool.query('SELECT id FROM shows');
    console.log(results.rows.length);
    for (let k = 0; k < results.rows.length; k++) {
        await pool.query('INSERT INTO seats (show_id, booked, pending) VALUES ($1, $2, $3)',[results.rows[k].id, b, b]);
    }
};

addSeats();