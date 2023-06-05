from fastapi import APIRouter
from models.application_models import Application
from models.event_models import EventId
from controllers.c_application import *


router = APIRouter(prefix="/application", tags=['Application'])


@router.post("/apply", summary="Apply for an event")
async def application_apply_event(application: Application):
    response = await apply_event(application.dict())
    return response


@router.delete("/delete_application", summary="Delete an application")
async def application_deregister(application_id):
    response = await deregister(application_id)
    return response

@router.post("/event_applications", summary="Fetch all applications for an event")
async def application_get_event_applications(event_id: EventId):
    response = await get_event_applications(event_id.dict())
    return response


@router.put("/approve", summary="Approve an application")
async def application_approve(application_id):
    response = await approve(application_id)
    return response