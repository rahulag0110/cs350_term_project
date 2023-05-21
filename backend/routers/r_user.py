from fastapi import APIRouter, HTTPException
from models.user_models import User
from controllers.c_user import *


router = APIRouter(prefix="/user", tags=['User'])


@router.post("/register", summary="Register user")
async def user_register(user: User):
    response = await register_user(user.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@router.get("/login")
async def user_login(email, password):
    response = await login_user(email, password)
    if response:
        return response
    raise HTTPException(400, "Email or password is incorrect")


@router.delete("/deregister")
async def user_deregister(user_id):
    response = await deregister_user(user_id)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


