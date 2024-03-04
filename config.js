const PORT = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST || 'bg6ixcnj8ifmxc0igvcr-mysql.services.clever-cloud.com';
const dbUser = process.env.DB_USER || 'uog1u20zdsuoij9c';
const dbPassword = process.env.DB_PASSWORD || 'tOWKlyt5cqkIGsk8kxMS';
const dbName = process.env.DB_NAME || 'bg6ixcnj8ifmxc0igvcr';
const dbPort = process.env.DB_PORT || 3306;

module.exports = {
    PORT: PORT,
    DB_HOST: dbHost,
    DB_USER: dbUser,
    DB_PASSWORD: dbPassword,
    DB_NAME: dbName,
    DB_PORT: dbPort
};
