import { buildIncludes } from "../utils/includes";

export function FindAllServiceProviders(db, query) {
    if(query && query.includes){
        let include = buildIncludes(db, query.includes)
        return db.service_provider.findAll({ include });
    }
    return db.service_provider.findAll();
}

export function FindAllServiceProvidersById(db, { id }) {
    return db.service_provider.findOne({ id })
}

export async function CreateServiceProvider(db, data) {
    return db.service_provider.create(data)
}

export async function UpdateServiceProvider(db, { id }, data) {
     // if we include a fields option we can limit valid fields, to
     // prevent malicious updating  model.save({fields: ['name']}) for instance
    return db.service_provider
    .update({...data},{ returning: true, where: { id }})
    .then(([ rowsUpdate, [updatedServiceProvider] ]) => updatedServiceProvider)
}

export async function DeleteServiceProvider(db, { id }) {
    let ServiceProvider = await db.service_provider.findOne({ id })
   return ServiceProvider.destroy()
}