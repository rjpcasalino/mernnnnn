import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";


var router = express.Router();
const uri = process.env.MONGODB_URI;

// middleware that is specific to this router
// CORS middleware
var corsMiddleware = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //replace localhost with actual host
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

  next();
}

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

router.use(myLogger);
router.use(corsMiddleware);

// end middleware

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("movies");
  let results = await collection.find({}).toArray();
  res.status(200).send({ ExpressResponse: results });
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  let newDocument = {
    movie: req.body.movie,
  };
  let collection = await db.collection(req.body.id);
  let result = await collection.insertOne(newDocument);
  res.status(200).send({ ExpressResponse: result });
});


export default router;
