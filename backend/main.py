from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import crop, fertilizer, disease

app = FastAPI(
    title="AGRI.AI Backend",
    description="API for Crop Recommendation and Fertilizer Suggestion",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(crop.router, prefix="/api/crop", tags=["Crop Recommendation"])
app.include_router(fertilizer.router, prefix="/api/fertilizer", tags=["Fertilizer Suggestion"])
app.include_router(disease.router, prefix="/api/disease", tags=["Plant Disease Detection"])

@app.get("/")
def read_root():
    return {"message": "Welcome to AGRI.AI API", "status": "running"}
