var express = require('express');
const { MongoClient } = require("mongodb");

var router = express.Router();
const bodyParser = require('body-parser');
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';

// middleware that is specific to this router
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

//router.use(myLogger)

router.get('/', function(req, res) {
  const { dbq, id } = req.query;
  if (!dbq  || !id ) return res.status(400).send({ message: 'Invalid request' });

  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db(dbq);
      let collection = database.collection(id);
      let results = await collection.find({})
        .limit(50)
        .toArray();
      // res.send(results).status(200); # another way of doing it
      res.status(200).send({ ExpressResponse: results });
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
});
  
router.post('/', (req, res) => {
    const { dbq, id, data } = req.body;
    if (!dbq || !id || !data) return res.status(400).send({ message: 'Invalid request' });
  
      const user = {
        id,
        data,
      };
      const client = new MongoClient(uri);

      async function run() {
        try {
          const database = client.db(dbq);
          const collection = database.collection(id);
          const myobj = { data: data };
          const result = await collection.insertOne(myobj);
          res.status(200).send({ ExpressResponse: result });
        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      run().catch(console.dir);

  });

module.exports = router;
