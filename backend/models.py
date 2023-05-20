from pydantic import BaseModel


class Todo(BaseModel):
    title: str
    description: str


class User(BaseModel):
    id: int
    name: str
    email: str
    password: str


class Event(BaseModel):
    id: int
    host_id: int
    name: str
    open_date: str
    close_date: str 
    # Todo change this to date
    reward_box_id: int


class RewardBox(BaseModel):
    id: int
    event_id: int
    reward_id: int
    reward: str
    claim_info: str


class Application(BaseModel):
    participant_id: int
    event_id: int
    link: str
    image: str
    status: bool


class DrawPool(BaseModel):
    participant_id: int
    event_id: int


class Winner(BaseModel):
    participant_id: int
    event_id: int
    rank: int
    reward: str
    claim_info: str
    status: bool

