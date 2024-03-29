from models.prize_models import Prize, PrizeId
from models.event_models import EventId
from database import collection_prizes
from bson.objectid import ObjectId
from helpers.prize_helpers import * 
from helpers.event_helpers import EventIdHelper


async def add(prize: Prize):
    result = await collection_prizes.insert_one(prize)
    if result:
        added_prize = await collection_prizes.find_one(prize)
        added_prize_id = PrizeHelper(added_prize)["_id"]
        response_data = {"status": "SUCCESS", "prize_id": added_prize_id}
    else:
        response_data = {"status": "FAIL", "msg": "Something went wrong"}
    return response_data
    

async def delete(prize_id: PrizeId):
    await collection_prizes.delete_one({"_id": PrizeIdHelper(prize_id)["prize_id"]})
    response_data = {"status": "SUCCESS"}
    return response_data


async def get_all(event_id: EventId):
    prizes = []
    async for prize in collection_prizes.find({"event_id": EventIdHelper(event_id)["event_id"]}):
        prizes.append(PrizeHelper(prize))
    response_data = {"status": "SUCCESS", "prizes": prizes}
    return response_data