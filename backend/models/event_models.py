from pydantic import BaseModel


class Event(BaseModel):
    id: int
    host_id: int
    name: str
    open_date: str
    close_date: str 
    # Todo change this to date
    reward_box_id: int