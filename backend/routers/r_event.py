from fastapi import APIRouter, HTTPException
from models.event_models import Event
from controllers.c_event import *
from controllers.c_prize import event_show_all_prizes


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


@router.get("/all_prizes")
async def get_all_events(event_id):
    response = await event_show_all_prizes(event_id)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")