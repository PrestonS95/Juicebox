const { client } = require("./index");

async function testDB() {
  try {
    // connect the client to the database, finally
    client.connect();

    const { rows } = await client.query('SELECT * FROM users;');

    // for now, logging is a fine way to see what's up
    console.log(rows);
  } catch (error) {
    console.error(error);
  } finally {
    // it's important to close out the client connection
    client.end();
  }
}

testDB();
