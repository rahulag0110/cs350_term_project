import motor.motor_asyncio
from bson.objectid import ObjectId
from models.user_models import User
from models.event_models import Event
from models.reward_box_models import RewardBox


# client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
client = motor.motor_asyncio.AsyncIOMotorClient("mongodb+srv://simple:simple@cluster0.duulzju.mongodb.net/")


def UserHelper(User) -> dict:
    return {
        "_id": str(User["_id"]),
        "name": str(User["name"]),
        "email": str(User["email"]),
        "password": str(User["password"])
    }

def EventHelper(Event) -> dict:
    return{
        "_id": str(Event["_id"]),
        "host_id": str(Event["host_id"]),
        "name": str(Event["name"]),
        "open_date": str(Event["open_date"]),
        "close_date": str(Event["close_date"]), 
        "reward_box_id": str(Event["reward_box_id"])
    }

def RewardBoxHelper(RewardBox) -> dict:
    return{
        "_id": str(RewardBox["_id"]),
        "event_id": str(RewardBox["event_id"]),
        "reward_id": str(RewardBox["reward_id"]),
        "reward": str(RewardBox["reward"]),
        "claim_info": str(RewardBox["claim_info"])
    }

database = client.ProjectDatabase
collection_users = database.Users
collection_events = database.Events
collection_reward_boxes = database.RewardBoxes


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


async def create_event(event: Event):
    result = await collection_events.insert_one(event)
    if result:
        registered_event = await collection_events.find_one(event)
        return EventHelper(registered_event)['_id']
    
async def delete_event(event_id: str):
    document = event_id
    result = await collection_events.delete_one({"_id": ObjectId(event_id)})
    return document


async def create_reward_box(reward_box: RewardBox):
    result = await collection_reward_boxes.insert_one(reward_box)
    if result:
        registered_box = await collection_reward_boxes.find_one(reward_box)
        return RewardBoxHelper(registered_box)['_id']

async def fetch_all_events():
    events = []
    async for event in collection_events.find():
        events.append(EventHelper(event))
    return events
