const faunadb = require('faunadb');
const fs = require('fs').promises;
const yaml = require('js-yaml');

const q = faunadb.query;

(async () => {
  const file = await fs.readFile(`${__dirname}/env.yml`, 'utf8');
  const yamlData = yaml.load(file);
  const env = yamlData['dev'];

  const client = new faunadb.Client({ secret: env.FAUNADB_SECRET });

  const email = process.argv[2];
  const password = process.argv[3];

  try {
    await client.query(
      q.Create(
        q.Collection("users"),
        {
          credentials: { password },
          data: {
            email,
          },
        }
      )
    )

    console.log(`Successfully created user ${email}.`)
  } catch (exception) {
    console.error('Failed creating DB schema.');
    console.error(exception);
  }
})();
