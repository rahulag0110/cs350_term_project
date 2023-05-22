from fastapi import APIRouter, HTTPException
from models.user_models import User, UserLogin
from controllers.c_user import register, login, deregister


router = APIRouter(prefix="/user", tags=['User'])


@router.post("/register", summary="Register user")
async def user_register(user: User):
    response = await register(user.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@router.post("/login")
async def user_login(login_cred: UserLogin):
    response = await login(login_cred.dict())
    return response


@router.delete("/deregister")
async def user_deregister(user_id):
    response = await deregister(user_id)
    return response