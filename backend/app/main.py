from fastapi import FastAPI
from app.routers import courses, auth

app = FastAPI(title="Plataforma de Cursos API")

# Rotas
app.include_router(courses.router, prefix="/courses", tags=["Courses"])
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])

@app.get("/")
def root():
    return {"message": "Plataforma de Cursos API is running!"}
