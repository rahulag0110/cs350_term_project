from models.user_models import User, UserLogin
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
        registered_user_id = UserHelper(registered_user)['_id']
        response_data = {"status": "SUCCESS", "user_id": registered_user_id}
    else:
        response_data = {"status": "FAIL", "msg": "Something went wrong"}
    return response_data
    

async def login_user(login_cred: UserLogin):
    result = await collection_users.find_one(login_cred)
    if result:
        response_data = {"status": "SUCCESS", "user_id": UserHelper(result)["_id"]}
    else:
        response_data = {"status": "FAIL", "msg": "User credentials are incorrect"}
    return response_data
        

async def deregister_user(user_id: ObjectId):
    result = await collection_users.delete_one({"_id": ObjectId(user_id)})
    if result:
        response_data = {"status": "SUCCESS"}
    else:
        response_data = {"status": "FAIL"}
    return response_data