from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from motor.motor_asyncio import AsyncIOMotorClient
from database import *


# from .models.user_models import User, UserRegisterRequestBody
from models.user_models import User

# client = AsyncIOMotorClient('mongodb://localhost:21017')
client = AsyncIOMotorClient("mongodb+srv://simple:simple@cluster0.duulzju.mongodb.net/")

origins = ["https://localhost:300"]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def read_root():
    return {"Ping":"Pong"}


@app.post("/user/register")
async def user_register(user: User):
    response = await register_user(user.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.get("/user/login")
async def user_login(email, password):
    response = await login_user(email, password)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.delete("/user/deregister/")
async def user_deregister(user_id):
    response = await deregister_user(user_id)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.post('/event/create')
async def event_create(event: Event):
    response = await create_event(event.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")