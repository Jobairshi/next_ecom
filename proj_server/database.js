console.log("needed to be implemented!!")


import pkg from 'pg';
const {Client} = pkg;

const client = new Client({
    host:'localhost',
    user:'postgres',
    password:'pass123',
    database:'tsl_employee',
    port:5432
});

client.connect();
export default client;