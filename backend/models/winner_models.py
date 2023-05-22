from pydantic import BaseModel


class Winner(BaseModel):
    participant_id: str
    event_id: str
    rank: int
    reward: str
    claim_info: str
    status: bool