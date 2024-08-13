const {MongoClient} = require('mongodb')

async function main() {
  // Connection URL and Database Name
  const uri = 'mongodb://localhost:27017' // replace with your MongoDB URI
  const client = new MongoClient(uri)

  try {
    // Connect to the MongoDB cluster
    await client.connect()

    // List all databases
    const databasesList = await client.db().admin().listDatabases()
    console.log('Databases:')

    const regex = /^casino-stark-e2e-/ // Regex for matching database names

    for (let dbInfo of databasesList.databases) {
      console.log(` - ${dbInfo.name}`)

      // If the database name matches the regex, drop the database
      if (regex.test(dbInfo.name)) {
        await client.db(dbInfo.name).dropDatabase()
        console.log(`Database ${dbInfo.name} deleted`)
      }
    }
  } catch (err) {
    console.error(err)
  } finally {
    await client.close()
  }
}

main().catch(console.error)
