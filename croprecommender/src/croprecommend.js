import React, { useState } from "react";
import bg2 from "./img/bg1.jpg";
function Form({ onSubmit }) {
  const [formValues, setFormValues] = useState({
    N: null,
    P: null,
    K: null,
    temperature: null,
    humidity: null,
    ph: null,
    Rainfall: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Map input field names to the desired keys
    const mappedName = {
      Nitrogen: "N",
      Phosporus: "P",
      Potassium: "K",
      Temperature: "temperature",
      Humidity: "humidity",
      Ph: "ph",
      Rainfall: "rainfall",
    };
    const mappedKey = mappedName[name];
    setFormValues({ ...formValues, [mappedKey]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <>
      <div className="glass-card p-8 m-8 w-full max-w-4xl shadow-2xl">
        <form onSubmit={handleSubmit}>
          <div className="text-3xl font-bold flex justify-center items-center py-8 text-white drop-shadow-md">
            <h2>ÜRÜN TAVSİYE MODELİ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {/* Helper function to generate inputs to dry up code */}
            {[
              { id: "Nitrogen", label: "Azot (N)" },
              { id: "Phosporus", label: "Fosfor (P)" },
              { id: "Potassium", label: "Potasyum (K)" },
              { id: "Temperature", label: "Sıcaklık (°C)", step: "0.01" },
              { id: "Humidity", label: "Nem (%)", step: "0.01" },
              { id: "Ph", label: "pH Değeri", step: "0.01" },
              { id: "Rainfall", label: "Yağış (mm)", step: "0.01" },
            ].map((field) => (
              <div key={field.id} className="col-span-1">
                <label htmlFor={field.id} className="block text-slate-200 py-2 font-semibold">
                  {field.label}
                </label>
                <input
                  type="number"
                  step={field.step || "0"}
                  id={field.id}
                  name={field.id}
                  placeholder="..."
                  className="w-full bg-black/20 border border-slate-600 rounded-lg py-2 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
          <div className="col-span-1 text-center mt-6">
            <button
              type="submit"
              className="w-64 h-14 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Tavsiye Al
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
function ResultCard({ result, onBack }) {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-violet-400 rounded-lg px-4 m-8 h-[calc(100vh-80px)] relative p-2">
      <div className="bg-blue-100 flex flex-row p-12 m-6 h-[calc(100vh-150px)] rounded-xl">
        <div className="flex flex-row">
          {/* First Column (Image) */}
          <div className="w-full md:w-1/2 py-4">
            <img
              src={bg2}
              alt="Image Description"
              className="w-full h-[calc(100vh-300px)] rounded-2xl"
            />
          </div>

          {/* Vertical Line */}
          <div className="ml-10 hidden md:block w-0.5 bg-black h-[calc(100vh-240px)] rounded-lg"></div>

          {/* Second Column (Text) */}
          <div className="w-full md:w-1/2 p-8">
            <div className="text-2xl font-bold text-center">{result}</div>
            <p className="mt-4 text-xl justify-between text-center">
              Tahmin edilen sonuç kesin olmayabilir. Bu, seçilebilecek yaklaşık
              bir tercihtir ve birçok faktöre bağlı olarak değişebilir. Tahmin edilen sonuç,
              geçmiş verilere dayanmaktadır ve sadece sınırlı faktörlerle seçilmiştir.
              Bu, birincil tercih olarak alınmamalıdır.
            </p>
          </div>
        </div>

        <button
          className="w-28 absolute right-20 bottom-16 text-white bg-black rounded-lg"
          onClick={onBack}
        >
          Geri
        </button>
      </div>
    </div>
  );
}

function Croprecommend() {
  const [response, setResponse] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleFormSubmit = async (formValues) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/crop/predict",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );
      const data = await response.json();
      console.log("prediction came from the model is ", data.result);
      setResponse(data.result);
      setShowForm(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleBack = () => {
    setResponse(null);
    setShowForm(true);
  };

  return (
    <>
      {showForm ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <ResultCard result={response} onBack={handleBack} />
      )}
    </>
  );
}

export default Croprecommend;
