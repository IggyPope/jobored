import serverInstance from '@/services/api/serverInstance';

const X_SECRET_KEY = process.env.API_X_SECRET_KEY;
const CLIENT_SECRET = process.env.API_CLIENT_SECRET;

export default async function handler(req, res) {
  serverInstance
    .get(`vacancies/${req.query.id}/`, {
      headers: {
        common: {
          Authorization: req.headers['authorization'],
          'X-Api-App-Id': CLIENT_SECRET,
        },
      },
    })
    .then(response => res.status(response.status).json(response.data));
}

export const config = {
  api: {
    externalResolver: true,
  },
};
