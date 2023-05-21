from pydantic import BaseModel

class RewardBox(BaseModel):
    id: int
    event_id: int
    reward_id: int
    reward: str
    claim_info: str