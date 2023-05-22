from models.prize_models import Prize
from database import collection_prizes
from bson.objectid import ObjectId


def PrizeHelper(Prize) -> dict:
    return{
        "_id": str(Prize["_id"]),
        "event_id": str(Prize["event_id"]),
        "prize_rank": int(Prize["prize_rank"]),
        "prize_name": str(Prize["prize_name"]),
        "claim_info": str(Prize["claim_info"])
    }


async def add(prize: Prize):
    result = await collection_prizes.insert_one(prize)
    if result:
        added_prize = await collection_prizes.find_one(prize)
        added_prize_id = PrizeHelper(added_prize)["_id"]
        response_data = {"status": "SUCCESS", "prize_id": added_prize_id}
    else:
        response_data = {"status": "FAIL", "msg": "Something went wrong"}
    return response_data
    

async def delete(prize_id: str):
    await collection_prizes.delete_one({"_id": ObjectId(prize_id)})
    response_data = {"status": "SUCCESS"}
    return response_data


async def get_all(event_id: str):
    prizes = []
    async for prize in collection_prizes.find({"event_id": event_id}):
        prizes.append(PrizeHelper(prize))
    response_data = {"status": "SUCCESS", "prizes": prizes}
    return response_data