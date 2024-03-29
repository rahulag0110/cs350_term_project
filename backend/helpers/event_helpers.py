def EventHelper(Event) -> dict:
    return{
        "_id": str(Event["_id"]),
        "host_id": str(Event["host_id"]),
        "name": str(Event["name"]),
        "open_date": str(Event["open_date"]),
        "close_date": str(Event["close_date"]),
        "description": str(Event["description"])
    }


def EventIdHelper(EventId) -> dict:
    return{
        "event_id": str(EventId["event_id"])
    }