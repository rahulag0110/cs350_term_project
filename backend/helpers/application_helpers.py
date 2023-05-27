def ApplicationHelper(Application) -> dict:
    return {
        "_id": str(Application["_id"]),
        "participant_id": str(Application["participant_id"]),
        "event_id": str(Application["event_id"]),
        "link": str(Application["link"]),
        "image": str(Application["image"]),
        "status": str(Application["status"])
    }