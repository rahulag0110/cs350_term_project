import motor.motor_asyncio
from bson.objectid import ObjectId


client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
# client = motor.motor_asyncio.AsyncIOMotorClient("mongodb+srv://simple:simple@cluster0.duulzju.mongodb.net/")


def UserHelper(User) -> dict:
    return {
        "_id": str(User["_id"]),
        "name": str(User["name"]),
        "email": str(User["email"]),
        "password": str(User["password"])
    }


database = client.ProjectDatabase
collection_users = database.Users
collection_events = database.Events


async def register_user(user):
    document = user
    result = await collection_users.insert_one(document)
    return document


async def login_user(email):
    result = await collection_users.find_one({"email": email})
    if result:
        return UserHelper(result)["_id"]

    


async def deregister_user(user_id: ObjectId):
    document = user_id
    result = await collection_users.delete_one({"_id": ObjectId(user_id)})
    return document