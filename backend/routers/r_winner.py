from fastapi import APIRouter
from controllers.c_winner import *
from models.event_models import EventId


router = APIRouter(prefix="/winner", tags=['Winner'])

@router.post("/select", summary = "Event winners")
async def event_winners(event_id: EventId):
    response = await select_winners(event_id.dict())
    return response
