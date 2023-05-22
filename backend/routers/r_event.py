from fastapi import APIRouter, HTTPException
from models.event_models import Event
from controllers.c_event import *
from controllers.c_prize import get_all


router = APIRouter(prefix="/event", tags=['Event'])
                

@router.post('/create')
async def event_create(event: Event):
    response = await create(event.dict())
    return response


@router.delete("/delete")
async def event_delete(event_id):
    response = await delete(event_id)
    return response


@router.get("/get_all")
async def event_get_all():
    response = await fetch_all()
    return response


@router.get("/get_all_prizes")
async def event_get_all_prizes(event_id):
    response = await get_all(event_id)
    return response