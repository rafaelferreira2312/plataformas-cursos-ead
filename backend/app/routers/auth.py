from fastapi import APIRouter

router = APIRouter()

@router.post("/login")
def login(username: str, password: str):
    return {"message": "User logged in successfully"}
