import serverInstance from '@/services/api/serverInstance';

const API_LOGIN = process.env.API_LOGIN;
const API_PASSWORD = process.env.API_PASSWORD;
const API_CLIENT_ID = process.env.API_CLIENT_ID;
const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET;

export default async function handler(req, res) {
  serverInstance
    .get('oauth2/password/', {
      params: {
        login: API_LOGIN,
        password: API_PASSWORD,
        client_id: API_CLIENT_ID,
        client_secret: API_CLIENT_SECRET,
        hr: 0,
      },
    })
    .then(response => res.status(response.status).json(response.data));
}

export const config = {
  api: {
    externalResolver: true,
  },
};
