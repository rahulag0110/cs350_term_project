from fastapi import APIRouter
from models.application_models import Application
from controllers.c_application import *

router = APIRouter(prefix="/application", tags=['Application'])

@router.post("/apply", summary="Apply event")
async def event_apply(application: Application):
    response = await apply_event(application.dict())
    return response

@router.delete("/delete_application")
async def application_deregister(application_id):
    response = await deregister_application(application_id)
    return response