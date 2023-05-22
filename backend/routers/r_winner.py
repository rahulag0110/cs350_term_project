from fastapi import APIRouter, HTTPException
from models.winner_models import Winner
from controllers.c_winner import *


router = APIRouter(prefix="/winner", tags=['Winner'])

@router.post("/win", summary = "Winning users")
async def event_winners(event_id: str):
    response = await select_winners(event_id)
    return response

