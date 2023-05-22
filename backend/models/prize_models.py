from pydantic import BaseModel
from bson.objectid import ObjectId


class Prize(BaseModel):
    _id: ObjectId
    event_id: str
    prize_rank: int
    prize_name: str
    claim_info: str