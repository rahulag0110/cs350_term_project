from fastapi import APIRouter, HTTPException
from models.user_models import User, UserLogin
from controllers.c_user import *


router = APIRouter(prefix="/user", tags=['User'])



@router.post("/register", summary="Register user")
async def user_register(user: User):
    response = await register_user(user.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


class CommonException(Exception):
    def __init__(self, status_code: int, detail: dict):
        self.status_code = status_code
        self.detail = detail

@router.post("/login")
async def user_login(login_cred: UserLogin):
    response = await login_user(login_cred.dict())
    # if response["status"] == "FAIL":
    if response["status"] == "SUCCESS":
        return response["user_id"]
    else:
        return response["msg"]
    # raise HTTPException(400, detail=response['msg'])
    # raise CommonException(status_code=400, detail=response['msg'])





@router.delete("/deregister")
async def user_deregister(user_id):
    response = await deregister_user(user_id)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")
