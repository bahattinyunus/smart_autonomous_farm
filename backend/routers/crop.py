from fastapi import APIRouter, HTTPException
import pickle
import numpy as np
import os
from schemas import CropData

router = APIRouter()

# Load Model
MODEL_PATH = os.path.join(os.path.dirname(__file__), "..", "models", "classifier.pkl")

try:
    with open(MODEL_PATH, "rb") as f:
        classifier = pickle.load(f)
except FileNotFoundError:
    print(f"Error: Model file not found at {MODEL_PATH}")
    classifier = None

CROP_DICT = {
    1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya",
    7: "Orange", 8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes",
    12: "Mango", 13: "Banana", 14: "Pomegranate", 15: "Lentil", 16: "Blackgram",
    17: "Mungbean", 18: "Mothbeans", 19: "Pigeonpeas", 20: "Kidneybeans",
    21: "Chickpea", 22: "Coffee"
}

@router.post("/predict")
def predict_crop(data: CropData):
    if classifier is None:
        raise HTTPException(status_code=500, detail="Model not loaded")

    feature_list = [
        data.N, data.P, data.K, 
        data.temperature, data.humidity, data.ph, data.rainfall
    ]
    
    try:
        single_pred = np.array(feature_list).reshape(1, -1)
        prediction = classifier.predict(single_pred)
        
        if prediction[0] in CROP_DICT:
            crop = CROP_DICT[prediction[0]]
            # Reformatted message to match frontend expectation or improved it
            result = f"{crop} is the best crop to be cultivated right there"
        else:
            result = "Sorry, we could not determine the best crop."
            
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
