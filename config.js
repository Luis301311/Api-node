const PORT = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST || 'localhost';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || 'luis';
const dbName = process.env.DB_NAME || 'MotoExpress';
const dbPort = process.env.DB_PORT || 3306;

module.exports = {
    PORT: PORT,
    DB_HOST: dbHost,
    DB_USER: dbUser,
    DB_PASSWORD: dbPassword,
    DB_NAME: dbName,
    DB_PORT: dbPort
};
