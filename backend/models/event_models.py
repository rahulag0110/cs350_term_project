from pydantic import BaseModel
from bson.objectid import ObjectId

class Event(BaseModel):
    _id: ObjectId
    host_id: int
    name: str
    open_date: str
    close_date: str 
    # Todo change this to date
    reward_box_id: int