const express = require("express");
const app = express();

/**
 * @swagger
 *
 * /:
 *   get:
 *     description: Base Route
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *            type: string
 */
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

module.exports = app;