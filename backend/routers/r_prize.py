from fastapi import APIRouter, HTTPException
from models.prize_models import Prize
from controllers.c_prize import *


router = APIRouter(prefix="/prize", tags=['Prize'])


@router.post("/add")
async def add_prize(prize: Prize):
    response = await add(prize.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@router.delete("/delete")
async def delete_prize(prize_id):
    response = await delete(prize_id)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")