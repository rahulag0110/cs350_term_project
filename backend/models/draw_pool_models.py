from pydantic import BaseModel


class DrawPool(BaseModel):
    participant_id: int
    event_id: int