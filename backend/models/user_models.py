from pydantic import BaseModel


class User(BaseModel):
    id: int
    name: str
    email: str
    password: str


class UserRegisterRequestBody(BaseModel):
    name: str
    email: str
    password: str
