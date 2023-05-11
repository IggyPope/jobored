import serverInstance from '@/services/api/serverInstance';

const X_SECRET_KEY = process.env.API_X_SECRET_KEY;
const CLIENT_SECRET = process.env.API_CLIENT_SECRET;

export default async function handler(req, res) {
  serverInstance
    .get(`vacancies/${req.query.id}/`, {
      headers: {
        Authorization: req.headers['authorization'],
        'X-Api-App-Id': CLIENT_SECRET,
        'x-secret-key': X_SECRET_KEY,
      },
    })
    .then(response => res.status(response.status).send(response.data));
}

export const config = {
  api: {
    externalResolver: true,
  },
};
