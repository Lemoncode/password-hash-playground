import { MongoClient } from 'mongodb';

// TODO: Move to env variable
const connectionURI = 'mongodb://localhost:27017/my-database';

(async function () {
  const client = new MongoClient(connectionURI);
  await client.connect();
  const db = client.db();
  console.log('Conectado a la base de datos');

  const users = [
    {
      name: 'John Doe',
      password: password1,
      email: 'john.doe@email.com',
    },
    {
      name: 'Jane Doe',
      password: password2,
      email: 'jane.doe@email.com',
    },
  ];

  await db.collection('users').insertMany(users);
  console.log(`Se han insertado ${users.length} usuarios`);
})();
