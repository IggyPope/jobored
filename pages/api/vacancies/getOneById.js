import serverInstance from '@/services/api/serverInstance';

export default async function handler(req, res) {
  serverInstance
    .get(`vacancies/${req.query.id}/`, {
      headers: {
        common: {
          Authorization: req.headers['authorization'],
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
