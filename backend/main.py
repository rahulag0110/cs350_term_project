from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import r_user, r_event, r_prize, r_application, r_winner


origins = ["*"]


app = FastAPI(
    title="CS350_Team15_API",
    docs_url="/docs"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


app.include_router(r_user.router)
app.include_router(r_event.router)
app.include_router(r_prize.router)
app.include_router(r_application.router)
app.include_router(r_winner.router)


@app.get("/")
def read_root():
    return {"Ping":"Pong"}