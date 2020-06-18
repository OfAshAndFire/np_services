const app = require("./app");
const swaggerUi = require("swagger-ui-express");
import { swaggerDocument } from "./swaggerDoc";
const swaggerJsDoc = require("swagger-jsdoc");

const port = process.env.PORT || 8001;
const swaggerDoc = swaggerJsDoc(swaggerDocument);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
