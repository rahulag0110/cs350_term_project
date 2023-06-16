from models.event_models import Event, EventId
from database import collection_events
from bson.objectid import ObjectId
from helpers.event_helpers import *


async def get_event(event_id: EventId):
    ev = []
    async for event in collection_events.find({"_id": ObjectId(EventIdHelper(event_id)["event_id"])}):
        ev.append(EventHelper(event))

    if len(ev) == 1:
        response_data = {"status": "SUCCESS", "event": ev[0]}
    else:
        response_data = {"status": "FAIL", "msg": "Event does not exist"}
    return response_data


async def create(event: Event):

    result = await collection_events.insert_one(event)
    if result:
        registered_event = await collection_events.find_one(event)
        registered_event_id = EventHelper(registered_event)["_id"]
        response_data = {"status": "SUCCESS", "user_id": registered_event_id}
    else:
        response_data = {"status": "FAIL", "msg": "Something went wrong"}
    return response_data
        

async def delete(event_id: str):
    await collection_events.delete_one({"_id": ObjectId(event_id)})
    response_data = {"status": "SUCCESS"}
    return response_data


async def fetch_all():
    events = []
    async for event in collection_events.find():
        events.append(EventHelper(event))
    response_data = {"status": "SUCCESS", "events": events}
    return response_data