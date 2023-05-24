from fastapi import APIRouter, HTTPException
from models.user_models import *
from controllers.c_user import register, login, deregister, events


router = APIRouter(prefix="/user", tags=['User'])


@router.post("/register", summary="Register user")
async def user_register(user: UserRegister):
    response = await register(user.dict())
    return response


@router.post("/login", summary="Login")
async def user_login(login_cred: UserLogin):
    response = await login(login_cred.dict())
    return response


@router.delete("/deregister", summary="Delete account")
async def user_deregister(user_id):
    response = await deregister(user_id)
    return response

@router.get("/events", summary="Fetch events created by a user")
async def user_events(user_id):
    response = await events(user_id)
    return response