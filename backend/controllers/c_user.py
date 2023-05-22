from models.user_models import User, UserLogin
from database import collection_users, collection_events
from bson.objectid import ObjectId
from helpers import *


async def register(user: User):
    result = await collection_users.insert_one(user)
    if result:
        registered_user = await collection_users.find_one(user)
        registered_user_id = UserHelper(registered_user)['_id']
        response_data = {"status": "SUCCESS", "user_id": registered_user_id}
    else:
        response_data = {"status": "FAIL", "msg": "Something went wrong"}
    return response_data
    

async def login(login_cred: UserLogin):
    result = await collection_users.find_one(login_cred)
    if result:
        response_data = {"status": "SUCCESS", "user_id": UserHelper(result)["_id"]}
    else:
        response_data = {"status": "FAIL", "msg": "User credentials are incorrect"}
    return response_data
        

async def deregister(user_id: ObjectId):
    await collection_users.delete_one({"_id": ObjectId(user_id)})
    response_data = {"status": "SUCCESS"}
    return response_data


async def events(host_id: str):
    user_events = []
    async for user_event in collection_events.find({"host_id": host_id}):
        user_events.append(EventHelper(user_event))
    response_data = {"status": "SUCCESS", "events": user_events}
    return response_data
