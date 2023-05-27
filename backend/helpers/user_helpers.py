def UserHelper(User) -> dict:
    return {
        "_id": str(User["_id"]),
        "name": str(User["name"]),
        "email": str(User["email"]),
        "password": str(User["password"])
    }


def UserRegisterHelper(UserRegister) -> dict:
    return{
        "name": str(UserRegister["name"]),
        "email": str(UserRegister["email"]),
        "password": str(UserRegister["password"])
    }