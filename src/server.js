const app = require("./app");
const swaggerUi = require('swagger-ui-express')
import { swaggerDocument } from './swaggerDoc'

const port = process.env.PORT || 8001;

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});