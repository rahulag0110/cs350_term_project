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


async def event_add_prize(prize: Prize):
    result = await collection_prizes.insert_one(prize)
    if result:
        added_prize = await collection_prizes.find_one(prize)
        return PrizeHelper(added_prize)['_id']
    

async def event_delete_prize(prize_id: str):
    document = prize_id
    result = await collection_prizes.delete_one({"_id": ObjectId(prize_id)})
    return document


async def event_show_all_prizes(event_id: str):
    prizes = []
    async for prize in collection_prizes.find({"event_id": ObjectId(event_id)}):
        prizes.append(PrizeHelper(prize))
    return prizes