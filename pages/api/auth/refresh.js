import serverInstance from '@/services/api/serverInstance';

const API_CLIENT_ID = process.env.API_CLIENT_ID;
const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET;

export default async function handler(req, res) {
  serverInstance
    .get(`oauth2/refresh_token/`, {
      params: {
        refresh_token: req.query['refresh_token'],
        client_id: API_CLIENT_ID,
        client_secret: API_CLIENT_SECRET,
      },
    })
    .then(response => res.status(response.status).json(response.data));
}
