from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_courses():
    return {"courses": ["Course 1", "Course 2", "Course 3"]}
