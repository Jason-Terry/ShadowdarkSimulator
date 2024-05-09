import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@antidoteclusterdev.0nodwle.mongodb.net/ShadowdarkSimulations`;

const PORT = process.env.PORT || 3000;

export const Config = {
  mongo: {
    url: MONGO_URL,
    user: MONGO_USERNAME,
    pass: MONGO_PASSWORD,
    dbName: 'ShadowdarkSimulations'
  },
  server: {
    port: PORT
  }
};
