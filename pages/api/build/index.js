import conn from '../../../lib/db';

export default async function handler(req, res) {
  const {
    body: {
      app_name,
      version,
      description,
      layout,
      platform,
      user_id,
      logo_image,
    },
  } = req;

  if (req.method === 'POST') {
    try {
      const queryText = `INSERT INTO builds (app_name, description, layout, version, platform, user_id, logo_image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
      const values = [
        app_name,
        description,
        layout,
        version,
        platform,
        user_id,
        logo_image,
      ];
      await conn.query(queryText, values, (err, result) => {
        if (!err) {
          return res.json({ status: 'success' });
        } else {
          // server error
          return res.status(500).end();
        }
      });
    } catch (error) {
      console.error(error);
      res.json(error);
      res.status(405).end();
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
