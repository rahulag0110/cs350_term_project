from models.winner_models import Winner
from database import collection_users
from bson.objectid import ObjectId


def WinnerHelper(Winner) -> dict:
    return {
        "participant_id": str(Winner["participant_id"]),
        "event_id": str(Winner["event_id"]),
        "rank": int(Winner["rank"]),
        "reward": str(Winner["reward"]),
        "claim_info": str(Winner["claim_info"]),
        "status": bool(Winner["status"])
    }
