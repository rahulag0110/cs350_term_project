from models.application_models import Application
from models.event_models import EventId
from database import collection_applications
from bson.objectid import ObjectId
from helpers.application_helpers import *
from helpers.event_helpers import EventIdHelper


async def apply_event(application: Application):

    ex_ev = []
    existen_app = await collection_applications.find_one({"participant_id": ApplicationHelper(application)["participant_id"], "event_id": ApplicationHelper(application)["event_id"]})
    # async for existent_event in collection_applications.find_one({, }):
    #     ex_ev.append(existent_event)
    # if len(ex_ev) != 0:
        # response_data = {"status": "FAIL", "msg": "You cannot apply more than once"}
        # return response_data
    if existen_app:
        response_data = {"status": "FAIL", "msg": "You cannot apply more than once"}
        return response_data


    result = await collection_applications.insert_one(application)
    if result:
        completed_application = await collection_applications.find_one(application)
        completed_application_id = ApplicationHelper(completed_application)['_id']
        response_data = {"status": "SUCCESS", "application_id": completed_application_id}
    else:
        response_data = {"status": "FAIL", "msg": "Something went wrong"}
    return response_data


async def deregister(application_id: ObjectId):
    await collection_applications.delete_one({"_id": ObjectId(application_id)})
    response_data = {"status": "SUCCESS"}
    return response_data


async def get_event_applications(event_id: EventId):
    applications = []
    async for application in collection_applications.find({"event_id": EventIdHelper(event_id)["event_id"]}):
        applications.append(ApplicationHelper(application))
    response_data = {"status": "SUCCESS", "applications": applications}
    return response_data


async def approve(application_id: ObjectId):    
    await collection_applications.update_one({"_id": ObjectId(application_id)}, {"$set": {"status": True}})
    response_data = {"status": "SUCCESS"}
    return response_data