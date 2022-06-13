import conn from '../../lib/db';

export default async function handler(req, res) {
  try {
    await conn.query('SELECT * FROM features', (err, result) => {
      if (!err) {
        return res.json(result.rows);
      } else {
        return res.status(500).end();
      }
    });
  } catch (error) {
    console.error(error);
    res.json(error);
    res.status(405).end();
  }
}
