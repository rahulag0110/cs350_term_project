from models.user_models import User
from database import collection_users
from bson.objectid import ObjectId


def UserHelper(User) -> dict:
    return {
        "_id": str(User["_id"]),
        "name": str(User["name"]),
        "email": str(User["email"]),
        "password": str(User["password"])
    }


async def register_user(user: User):
    result = await collection_users.insert_one(user)
    if result:
        registered_user = await collection_users.find_one(user)
        return UserHelper(registered_user)['_id']
    

async def login_user(email, password):
    result = await collection_users.find_one({"email": email, "password": password})
    if result:
        return UserHelper(result)["_id"]
    

async def deregister_user(user_id: ObjectId):
    document = user_id
    result = await collection_users.delete_one({"_id": ObjectId(user_id)})
    return document

