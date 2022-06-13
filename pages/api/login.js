import conn from '../../lib/db';

export default async function handler(req, res) {
  const {
    body: { username },
  } = req;

  if (req.method === 'POST') {
    try {
      let user;
      await conn.query(
        `Select * from users where username = '${username}'`,
        (err, result) => {
          if (!err) {
            if (result.rows.length === 0) {
              return res.status(404).send({
                error: 'User not found',
              });
            }
            user = result.rows[0];
            // console.log(result.rows);

            return res.json(user);
          } else {
            // server error
            return res.status(500).end();
          }
        }
      );
    } catch (error) {
      console.error(error);
      res.json(error);
      res.status(405).end();
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
