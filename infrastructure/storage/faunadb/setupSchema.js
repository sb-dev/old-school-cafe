const faunadb = require('faunadb');
const fs = require('fs').promises;
const yaml = require('js-yaml');

const q = faunadb.query;

(async () => {
  const file = await fs.readFile(`${__dirname}/env.yml`, 'utf8');
  const yamlData = yaml.load(file);
  const env = yamlData['dev'];

  const client = new faunadb.Client({ secret: env.FAUNADB_SECRET });

  try {
    await client.query(q.CreateCollection({ name: "users" }))
    await client.query(q.CreateIndex({
      name: "users_by_email",
      permissions: { read: "public"},
      source: q.Collection("users"),
      terms: [{field: ["data", "email"]}],
      unique: true,
    }));

    console.log('Successfully created DB schema.')
  } catch (exception) {
    console.error('Failed creating DB schema.');
    console.error(exception);
  }
})();
