@echo off
TITLE AGRI.AI Launcher
COLOR 0A

echo ==================================================
echo           AGRI.AI - OTONOM CIFTLIK
echo        Smart Agriculture Helper System
echo ==================================================
echo.
echo [1/2] Backend baslatiliyor (FastAPI)...
start "AGRI.AI Backend" cmd /k "cd backend && pip install -r requirements.txt && uvicorn main:app --reload --port 8000"

echo [2/2] Frontend baslatiliyor (React)...
echo Frontend bagimliliklari kontrol ediliyor, biraz surebilir...
start "AGRI.AI Frontend" cmd /k "cd croprecommender && npm install && npm start"

echo.
echo ==================================================
echo TUM SERVISLER BASLATILDI!
echo --------------------------------------------------
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:8000
echo Swagger:  http://localhost:8000/docs
echo ==================================================
echo.
echo Uygulamayi kapatmak icin acilan pencereleri kapatin.
pause
