const app = require("./app");
const port = process.env.PORT || 8001;
const swaggerDoc = swaggerJsDoc(swaggerDocument)

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});