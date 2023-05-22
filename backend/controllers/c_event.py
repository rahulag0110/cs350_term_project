from models.event_models import Event
from database import collection_events
from bson.objectid import ObjectId


def EventHelper(Event) -> dict:
    return{
        "_id": str(Event["_id"]),
        "host_id": str(Event["host_id"]),
        "name": str(Event["name"]),
        "open_date": str(Event["open_date"]),
        "close_date": str(Event["close_date"])
    }


async def create_event(event: Event):
    result = await collection_events.insert_one(event)
    if result:
        registered_event = await collection_events.find_one(event)
        return EventHelper(registered_event)['_id']
    
    
async def delete_event(event_id: str):
    document = event_id
    result = await collection_events.delete_one({"_id": ObjectId(event_id)})
    return document


async def fetch_all_events():
    events = []
    async for event in collection_events.find():
        events.append(EventHelper(event))
    return events