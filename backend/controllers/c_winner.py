from database import collection_applications, collection_prizes, collection_winners
import random
from helpers.winner_helpers import *
from helpers.prize_helpers import *
from models.event_models import EventId
from bson.objectid import ObjectId
from helpers.event_helpers import EventIdHelper


async def select_winners(event_id: EventId):
    async for winner in collection_winners.find():
        if event_id == WinnerHelper(winner)["event_id"]:
            response_data = {"status": "FAIL", "msg": "Winners already selected"}
            return response_data
    applications = []
    async for application in collection_applications.find({"event_id": ObjectId(EventIdHelper(event_id)["event_id"]), "status": True}, {"participant_id": 1, "event_id": 1}):
        applications.append(TempWinnerHelper(application))
    prizes = []
    async for prize in collection_prizes.find({"event_id": ObjectId(EventIdHelper(event_id)["event_id"])}):
        prizes.append(PrizeHelper(prize))
    winners = random.sample(applications, len(prizes))
    ctr = 0
    for winner in winners:
        ctr += 1
        async for prize in collection_prizes.find({"event_id": winner["event_id"],  "prize_rank": ctr}, {"prize_name": 1, "claim_info": 1}):
            t1 = winner
            t2 = {"rank": ctr}
            t3 = TempPrizeHelper(prize)
            t4 = {"status": False}
            t3.update(t4)
            t2.update(t3)
            t1.update(t2)
            await collection_winners.insert_one(WinnerHelper(t1))
    response_data = {"status": "SUCCESS", "winners": winners}
    return winners

