from fastapi import APIRouter
from models.application_models import Application
from controllers.c_application import *


router = APIRouter(prefix="/application", tags=['Application'])


@router.post("/apply", summary="Apply for an event")
async def event_apply(application: Application):
    response = await apply_event(application.dict())
    return response


@router.delete("/delete_application", summary="Delete an application")
async def application_deregister(application_id):
    response = await deregister_application(application_id)
    return response

@router.get("/event_applications", summary="Fetch all applications for an event")
async def application_get_event_applications(event_id):
    response = await event_applications(event_id)
    return response