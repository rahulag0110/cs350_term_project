import motor.motor_asyncio
from bson.objectid import ObjectId
from models.user_models import User
from models.event_models import Event
from models.reward_box_models import RewardBox


# client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
client = motor.motor_asyncio.AsyncIOMotorClient("mongodb+srv://simple:simple@cluster0.duulzju.mongodb.net/")




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

