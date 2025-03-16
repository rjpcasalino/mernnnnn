import express from "express";

var router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send({ ExpressResponse: "respond with a resource" });
});

export default router;
