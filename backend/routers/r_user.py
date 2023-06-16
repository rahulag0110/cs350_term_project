from fastapi import APIRouter
from models.user_models import *
from controllers.c_user import *


router = APIRouter(prefix="/user", tags=['User'])


@router.post("/get_user", summary="Get user information")
async def user_get_user(user_id):
    response = await get_user(user_id)
    return response


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


@router.post("/created_events", summary="Fetch events created by a user")
async def user_created_events(user_id: UserId):
    response = await created_events(user_id.dict())
    return response


@router.post("/participating_events", summary="Fetch all events a user participates in")
async def user_participating_events(user_id: UserId):
    response = await participating_events(user_id.dict())
    return response