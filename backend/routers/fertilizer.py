from fastapi import APIRouter, HTTPException
import pickle
import numpy as np
import os
from schemas import FertilizerData

router = APIRouter()

# Load Model
MODEL_PATH = os.path.join(os.path.dirname(__file__), "..", "models", "Fertclassifier.pkl")

try:
    with open(MODEL_PATH, "rb") as f:
        classifier = pickle.load(f)
except FileNotFoundError:
    print(f"Error: Model file not found at {MODEL_PATH}")
    classifier = None

SOIL_DICT = {"Loamy": 1, "Sandy": 2, "Clayey": 3, "Black": 4, "Red": 5}
CROP_DICT = {
    "Sugarcane": 1, "Cotton": 2, "Millets": 3, "Paddy": 4, "Pulses": 5,
    "Wheat": 6, "Tobacco": 7, "Barley": 8, "Oil seeds": 9, "Ground Nuts": 10, "Maize": 11
}

@router.post("/predict")
def predict_fertilizer(data: FertilizerData):
    if classifier is None:
        raise HTTPException(status_code=500, detail="Model not loaded")

    try:
        Soil_Num = SOIL_DICT.get(data.Soil_Type, 1) # Default to 1 if not found
        Crop_Num = CROP_DICT.get(data.Crop_Type, 1) # Default to 1 if not found

        feature_list = [
            data.Temparature,
            data.Humidity,
            data.Moisture,
            data.Nitrogen,
            data.Potassium,
            data.Phosphorous,
            Soil_Num,
            Crop_Num
        ]
        
        single_pred = np.array(feature_list).reshape(1, -1)
        prediction = classifier.predict(single_pred)
        
        result = f"{prediction[0]} is the best Fertilizer to used right there"
        return {"result": result}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
