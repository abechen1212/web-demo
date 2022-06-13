import conn from '../../../lib/db';

export default function handler(req, res) {
  const { user_id } = req.query;
  if (req.method === 'GET') {
    try {
      const queryText = `SELECT * FROM builds WHERE user_id = $1`;
      const values = [user_id];
      conn.query(queryText, values, (err, result) => {
        if (!err) {
          const ids = result.rows.map((row) => row.build_id);
          const maxBuildId = Math.max(...ids);
          const latestBuild = result.rows.find(
            (row) => row.build_id === maxBuildId
          );
          console.log(latestBuild);
          return res.json(latestBuild);
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
