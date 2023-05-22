from pydantic import BaseModel
from bson.objectid import ObjectId

class Winner(BaseModel):
    participant_id: ObjectId
    event_id: str
    rank: int
    reward: str
    claim_info: str
    status: bool