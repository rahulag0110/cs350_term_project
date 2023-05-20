from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from motor.motor_asyncio import AsyncIOMotorClient
from database import *

from models import Todo, User


client = AsyncIOMotorClient('mongodb://localhost:21017')
# client = AsyncIOMotorClient("mongodb+srv://simple:simple@cluster0.duulzju.mongodb.net/")

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


# @app.get("/api/todo")
# async def get_todo():
#     response = await fetch_all_todos()
#     return response


# @app.get("/api/todo{title}")
# async def get_todo_by_id(title):
#     response = await fetch_one_todo(title)
#     if response:
#         return response
#     else:
#         raise HTTPException(404, "no todo with this title")


# @app.get("/api/todo/{title}", response_model=Todo)
# async def get_todo_by_title(title):
#     response = await fetch_one_todo(title)
#     if response:
#         return response
#     raise HTTPException(404, f"There is no todo with the title {title}")


# @app.post("/api/todo/", response_model=Todo)
# async def post_todo(todo: Todo):
#     response = await create_todo(todo.dict())
#     if response:
#         return response
#     raise HTTPException(400, "Something went wrong")



@app.post("/user/register", response_model=User)
async def user_register(user: User):
    response = await register_user(user.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")



# @app.put("/api/todo/{title}/", response_model=Todo)
# async def put_todo(title: str, desc: str):
#     response = await update_todo(title, desc)
#     if response:
#         return response
#     raise HTTPException(404, f"There is no todo with the title {title}")


# @app.delete("/api/todo/{title}")
# async def delete_todo(title):
#     response = await remove_todo(title)
#     if response:
#         return "Successfully deleted todo"
#     raise HTTPException(404, f"There is no todo with the title {title}")