from fastapi import APIRouter, HTTPException
from models.event_models import Event
from controllers.c_event import *


router = APIRouter(prefix="/event", tags=['Event'])
                

@router.post('/create')
async def event_create(event: Event):
    response = await create_event(event.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@router.delete("/deregister/")
async def event_delete(event_id):
    response = await delete_event(event_id)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@router.get("/all")
async def get_all_events():
    response = await fetch_all_events()
    if response:
        return response
    raise HTTPException(400, "Something went wrong")