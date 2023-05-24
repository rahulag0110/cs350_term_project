def UserHelper(User) -> dict:
    return {
        "_id": str(User["_id"]),
        "name": str(User["name"]),
        "email": str(User["email"]),
        "password": str(User["password"])
    }


def UserRegisterHelper(UserRegister) -> dict:
    return{
        "name": str(UserRegister["name"]),
        "email": str(UserRegister["email"]),
        "password": str(UserRegister["password"])
    }


def PrizeHelper(Prize) -> dict:
    return{
        "_id": str(Prize["_id"]),
        "event_id": str(Prize["event_id"]),
        "prize_rank": int(Prize["prize_rank"]),
        "prize_name": str(Prize["prize_name"]),
        "claim_info": str(Prize["claim_info"])
    }


def EventHelper(Event) -> dict:
    return{
        "_id": str(Event["_id"]),
        "host_id": str(Event["host_id"]),
        "name": str(Event["name"]),
        "open_date": str(Event["open_date"]),
        "close_date": str(Event["close_date"])
    }


def WinnerHelper(Winner) -> dict:
    return {
        "participant_id": str(Winner["participant_id"]),
        "event_id": str(Winner["event_id"]),
        "rank": int(Winner["rank"]),
        "reward": str(Winner["reward"]),
        "claim_info": str(Winner["claim_info"]),
        "status": bool(Winner["status"])
    }


def ApplicationHelper(Application) -> dict:
    return {
        "_id": str(Application["_id"]),
        "participant_id": str(Application["participant_id"]),
        "event_id": str(Application["event_id"]),
        "link": str(Application["link"]),
        "image": str(Application["image"]),
        "status": str(Application["status"])
    }


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