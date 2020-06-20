export async function FindAllUsers(db) {
    return db.user.findAll();
}

export async function FindAllUserbyId(db, { id }) {
    return db.user.findOne({ id });
}

// Create a new user
export async function CreateUser(db, user) {
    console.log("entering CreateUser function");
    const new_user = await db.user.create({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
    });

    console.log(new_user);
    return new_user;
}

export async function DeleteUser(db, { id }) {
    return db.user.destroy({
        where: { id },
    });
}

export async function UpdateUser(db, { id }, user) {
    return db.user.update(
        {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            primary_phone: user.primary_phone,
            modifiedAt: Date.now(),
        },
        {
            returning: true,
            where: { id },
        }
    );
}
