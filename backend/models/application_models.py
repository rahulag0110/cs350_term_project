from pydantic import BaseModel


class Application(BaseModel):
    participant_id: int
    event_id: int
    link: str
    image: str
    status: bool