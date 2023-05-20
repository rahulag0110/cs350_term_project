from pydantic import BaseModel


class Winner(BaseModel):
    participant_id: int
    event_id: int
    rank: int
    reward: str
    claim_info: str
    status: bool