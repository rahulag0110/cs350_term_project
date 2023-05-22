from pydantic import BaseModel
from bson.objectid import ObjectId

class Event(BaseModel):
    _id: str
    host_id: str
    name: str
    open_date: str
    close_date: str 
    # Todo change this to date