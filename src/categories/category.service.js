
export function FindAllCategories(db) {
    return db.Category.findAll();
}

export function FindAllCategoriesById(db, { id }) {
    return db.Category.findOne({ id })
}

export async function CreateCategory(db, data) {
    return db.Category.create(data)
}

export async function UpdateCategory(db, { id }, data) {
     // if we include a fields option we can limit valid fields, to
     // prevent malicious updating  model.save({fields: ['name']}) for instance
    return db.Category
    .update({...data},{ returning: true, where: { id }})
    .then(([ rowsUpdate, [updatedCategory] ]) => updatedCategory)
}

export async function DeleteCategory(db, { id }) {
    let Category = await db.Category.findOne({ id })
   return Category.destroy()
}