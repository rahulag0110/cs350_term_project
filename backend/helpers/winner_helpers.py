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