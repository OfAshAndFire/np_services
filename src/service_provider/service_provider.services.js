
export function FindAllServiceProviders(db) {
    return db.service_provider.findAll();
}

export function FindAllServiceProvidersById(db, { id }) {
    return db.service_provider.findOne({ id })
}

export async function CreateServiceProvider(db, data) {
    return new db.service_provider.create(data)
}

export async function UpdateServiceProvider(db, { id }, data) {
     let ServiceProvider = await db.service_provider.findOne({ id })
     // easier than looping through keys to update
     ServiceProvider = {
         ...ServiceProvider,
         ...data
     }
     // if we include a fields option we can limit valid fields, to
     // prevent malicious updating  model.save({fields: ['name']}) for instance
    return ServiceProvider.save()
}

export async function DeleteServiceProvider(db, { id }) {
    let ServiceProvider = await db.service_provider.findOne({ id })
   return ServiceProvider.destroy()
}