import motor.motor_asyncio


# client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
client = motor.motor_asyncio.AsyncIOMotorClient("mongodb+srv://simple:simple@cluster0.duulzju.mongodb.net/")

database = client.ProjectDatabase
collection_users = database.Users
collection_events = database.Events
collection_prizes = database.Prizes
collection_applications = database.Applications
