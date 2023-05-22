from models.application_models import Application
from database import collection_applications
from bson.objectid import ObjectId
from helpers import *


async def apply_event(application: Application):
    result = await collection_applications.insert_one(application)
    if result:
        completed_application = await collection_applications.find_one(application)
        completed_application_id = ApplicationHelper(completed_application)['_id']
        response_data = {"status": "SUCCESS", "application_id": completed_application_id}
    else:
        response_data = {"status": "FAIL", "msg": "Something went wrong"}
    return response_data


async def deregister_application(application_id: ObjectId):
    await collection_applications.delete_one({"_id": ObjectId(application_id)})
    response_data = {"status": "SUCCESS"}
    return response_data