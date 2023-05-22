from pydantic import BaseModel
from bson.objectid import ObjectId


class Winner(BaseModel):
    _id: ObjectId
    participant_id: str
    event_id: str
    rank: int
    reward: str
    claim_info: str
    status: bool