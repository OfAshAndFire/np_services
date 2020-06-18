export function buildIncludes(db, rawIncludes){
    const modelIncludeArr = rawIncludes.split(',').map(model => {
        if(!db[model]){
            console.error('That model does not exist')
        }
        return {
            model: db[model]
        }
    })
    return modelIncludeArr;
}