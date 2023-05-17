import serverInstance from '@/services/api/serverInstance';

export default async function handler(req, res) {
  serverInstance
    .get(`catalogues/`)
    .then(response => res.status(response.status).json(response.data))
    .catch(error =>
      res.status(error.response.status).json(error.response.data)
    );
}

export const config = {
  api: {
    externalResolver: true,
  },
};
