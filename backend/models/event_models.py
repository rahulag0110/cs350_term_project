from pydantic import BaseModel
from bson.objectid import ObjectId


class Event(BaseModel):
    _id: ObjectId
    host_id: str
    name: str
    open_date: str
    close_date: str 
    description: str
    # Todo change this to date


class EventId(BaseModel):
    event_id: str