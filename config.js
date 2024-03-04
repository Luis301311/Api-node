const PORT = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST || 'monorail.proxy.rlwy.net';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || 'd-f12b421D5fDH26cCDbgh5bGF1G3H5H';
const dbName = process.env.DB_NAME || 'railway';
const dbPort = process.env.DB_PORT || 17513;

module.exports = {
    PORT: PORT,
    DB_HOST: dbHost,
    DB_USER: dbUser,
    DB_PASSWORD: dbPassword,
    DB_NAME: dbName,
    DB_PORT: dbPort
};
