import models from '../models';

export async function initDb() {
    await models.sequelize.sync()
}


