from fastapi import APIRouter, HTTPException
from models.prize_models import Prize, PrizeId
from controllers.c_prize import *


router = APIRouter(prefix="/prize", tags=['Prize'])


@router.post("/add", summary="Add a prize")
async def add_prize(prize: Prize):
    response = await add(prize.dict())
    return response


@router.delete("/delete", summary="Delete a prize")
async def delete_prize(prize_id: PrizeId):
    response = await delete(prize_id.dict())
    return response