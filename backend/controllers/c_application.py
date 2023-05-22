from models.application_models import Application
from database import collection_applications
from bson.objectid import ObjectId
from helpers import *


async def apply_event(application: Application):
    result = await collection_applications.insert_one(application)
    if result:
        applied_event = await collection_applications.find_one(application)
        return ApplicationHelper(applied_event)['_id']
    

async def deregister_application(application_id: ObjectId):
    result = await collection_applications.delete_one({"_id": ObjectId(application_id)})
    if result:
        response_data = {"status": "SUCCESS"}
    else:
        response_data = {"status": "FAIL"}
    return response_data