//Put
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Put Your Session Id 🐣",
MONGODB: process.env.MONGODB || "Put Your Mongode Url 🖇️",
PREFIX: process.env.PREFIX || '.' ,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94760172100' : process.env.OWNER_NUMBER,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
