from pydantic import BaseModel
from bson.objectid import ObjectId


class Application(BaseModel):
    _id: ObjectId
    participant_id: str
    event_id: str
    link: str
    image: str
    status: bool
    name: str