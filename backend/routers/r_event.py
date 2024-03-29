from fastapi import APIRouter, HTTPException
from models.event_models import Event, EventId
from controllers.c_event import *
from controllers.c_prize import get_all


router = APIRouter(prefix="/event", tags=['Event'])


@router.post("/get_event", summary="Get event information")
async def user_get_event(event_id: EventId):
    response = await get_event(event_id.dict())
    return response


@router.post('/create', summary="Create an event")
async def event_create(event: Event):
    response = await create(event.dict())
    return response


@router.delete("/delete", summary="Delete an event")
async def event_delete(event_id):
    response = await delete(event_id)
    return response

# change to current events
@router.get("/get_all", summary="Fetch all events")
async def event_get_all():
    response = await fetch_all()
    return response


@router.post("/get_all_prizes", summary="Fetch all prizes for an event")
async def event_get_all_prizes(event_id: EventId):
    response = await get_all(event_id.dict())
    return response