from models.winner_models import Winner
from models.application_models import Application
from database import collection_applications, collection_prizes, collection_winners
from bson.objectid import ObjectId
import random


def WinnerHelper(Winner) -> dict:
    return {
        "_id": str(Winner["_id"]),
        "participant_id": str(Winner["participant_id"]),
        "event_id": str(Winner["event_id"]),
        "rank": int(Winner["rank"]),
        "prize_name": str(Winner["prize_name"]),
        "claim_info": str(Winner["claim_info"]),
        "status": bool(Winner["status"])
    }

def TempWinnerHelper(Winner) -> dict:
    return {
        "_id": str(Winner["_id"]),
        "participant_id": str(Winner["participant_id"]),
        "event_id": str(Winner["event_id"]),
    }

def PrizeHelper(Prize) -> dict:
    return{
        "_id": str(Prize["_id"]),
        "event_id": str(Prize["event_id"]),
        "prize_rank": int(Prize["prize_rank"]),
        "prize_name": str(Prize["prize_name"]),
        "claim_info": str(Prize["claim_info"])
    }

def TempPrizeHelper(Prize) -> dict:
    return{
        "prize_name": str(Prize["prize_name"]),
        "claim_info": str(Prize["claim_info"])
    }


async def select_winners(event_id: str):
    applications = []
    async for application in collection_applications.find({"event_id": event_id, "status": True}, {"participant_id": 1, "event_id": 1}):
        applications.append(TempWinnerHelper(application))
    prizes = []
    async for prize in collection_prizes.find({"event_id": event_id}):
        prizes.append(PrizeHelper(prize))
    n = len(prizes)
    winners = random.sample(applications, n)
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
            result = await collection_winners.insert_one(WinnerHelper(t1))
    return winners