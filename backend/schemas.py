from pydantic import BaseModel

class CropData(BaseModel):
    N: int
    P: int
    K: int
    temperature: float
    humidity: float
    ph: float
    rainfall: float

class FertilizerData(BaseModel):
    Temparature: int
    Humidity: int
    Moisture: int
    Nitrogen: int
    Potassium: int
    Phosphorous: int
    Soil_Type: str
    Crop_Type: str
