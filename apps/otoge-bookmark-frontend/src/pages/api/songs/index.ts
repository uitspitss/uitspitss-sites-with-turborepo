import { HTTPError } from '@aspida/fetch';
import { withApiAuthRequired, getAccessToken } from '@auth0/nextjs-auth0';
import { NextApiHandler } from 'next';
import { generateClient } from '@/utils/api-client';

const handler: NextApiHandler = async (req, res) => {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const client = generateClient(accessToken as string);

    const response = await client.songs.get();

    res.status(response.status).json(response.body);
  } catch (error) {
    console.error(error);
    if (error instanceof HTTPError) {
      res.status(error.response.status).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Unhandled error' });
    }
  }
};

export default withApiAuthRequired(handler);
