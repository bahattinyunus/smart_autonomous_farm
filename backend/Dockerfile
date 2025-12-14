FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .

# Install dependencies
# Using --no-cache-dir to keep image size small
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY . .

# Expose the port FastAPI runs on
EXPOSE 8000

# Command to run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
