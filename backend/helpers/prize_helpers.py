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