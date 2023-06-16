from models.user_models import *
from database import collection_users, collection_events, collection_applications
from bson.objectid import ObjectId
from helpers.user_helpers import *
from helpers.event_helpers import EventHelper
from helpers.application_helpers import ApplicationHelper


async def get_user(user_id: str):
    us = []
    async for usr in collection_users.find({"_id": ObjectId(user_id)}):
        us.append(UserHelper(usr))

    if len(us) == 1:
        response_data = {"status": "SUCCESS", "user": us[0]}
    else:
        response_data = {"status": "FAIL", "msg": "User does not exist"}
    return response_data


async def register(user: UserRegister):
    user_in_db = await collection_users.find_one({"email": UserRegisterHelper(user)["email"]})
    if user_in_db:
        response_data = {"status": "FAIL", "msg": "User already registered"}
    else:
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


async def created_events(host_id: UserId):
    user_created_events = []
    async for user_event in collection_events.find({"host_id": UserIdHelper(host_id)["user_id"]}):
        user_created_events.append(EventHelper(user_event))
    response_data = {"status": "SUCCESS", "events": user_created_events}
    return response_data


async def participating_events(user_id: UserId):
    user_participating_event_ids = []
    async for user_application in collection_applications.find({"participant_id": UserIdHelper(user_id)["user_id"]}):
        user_participating_event_ids.append(ApplicationHelper(user_application)["event_id"])
    events = []
    for id in user_participating_event_ids:
        async for event in collection_events.find({"_id": ObjectId(id)}):
            events.append(EventHelper(event))
    response_data = {"status": "SUCCESS", "events": events}
    return response_data