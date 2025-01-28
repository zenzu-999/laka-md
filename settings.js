//Put
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
//👉 Put Your Session Id 🐣 👈කියන එක කපලා අයින් කරලා ඔයාගේ Session id එක දාන්න.
SESSION_ID: process.env.SESSION_ID || "LAKA-MD=l1xViAqS#1pdO8LR75a8lTCWs55LD2cuwsI6bY9axhWHLqfFbVxU",
//👉 Put Your Mongode Url 🖇️ 👈කියන එක කපලා අයින් කරලා ඔයාගේ Mongode Url එක දාන්න.
MONGODB: process.env.MONGODB || "Put Your Mongode Url 🖇️",
PREFIX: process.env.PREFIX || '.' ,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94741281478' : process.env.OWNER_NUMBER,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
