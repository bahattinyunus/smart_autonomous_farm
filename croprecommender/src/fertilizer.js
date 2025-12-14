import React, { useState } from "react";
import bg2 from "./img/bg1.jpg";
function Form({ onSubmit }) {
  const [formValues, setFormValues] = useState({
    Temparature: null,
    Humidity: null,
    Moisture: null,
    Nitrogen: null,
    Potassium: null,
    Phosphorous: null,
    Soil_Type: "Loamy",
    Crop_Type: "Sugarcane",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Map input field names to the desired keys
    const mappedName = {
      Temparature: "Temparature",
      Humidity: "Humidity",
      Moisture: "Moisture",
      Nitrogen: "Nitrogen",
      Potassium: "Potassium",
      Phosphorous: "Phosphorous",
      Soil_Type: "Soil_Type",
      Crop_Type: "Crop_Type",
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
            <h2 className="text-center">
              GÜBRE TAVSİYE MODELİ
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {/* Helper for inputs */}
            {[
              { id: "Humidity", label: "Nem (%)" },
              { id: "Moisture", label: "Toprak Nemi" },
              { id: "Nitrogen", label: "Azot (N)" },
              { id: "Temparature", label: "Sıcaklık (°C)", step: "0.1" },
              { id: "Potassium", label: "Potasyum (K)" },
              { id: "Phosphorous", label: "Fosfor (P)" },
            ].map(field => (
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
                  className="w-full bg-black/20 border border-slate-600 rounded-lg py-2 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  required
                  onChange={handleInputChange}
                />
              </div>
            ))}

            {/* Crop_Type Input */}
            <div className="col-span-1">
              <label htmlFor="Soil_Type" className="block text-slate-200 py-2 font-semibold">
                Toprak Tipi
              </label>
              <select
                id="Soil_Type"
                name="Soil_Type"
                className="w-full bg-black/20 border border-slate-600 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                onChange={handleInputChange}
              >
                <option className="text-black" value="Loamy">Tınlı</option>
                <option className="text-black" value="Sandy">Kumlu</option>
                <option className="text-black" value="Clayey">Killi</option>
                <option className="text-black" value="Black">Siyah</option>
                <option className="text-black" value="Red">Kırmızı</option>
              </select>
            </div>
            {/* Crop_Type Input */}
            <div className="col-span-1">
              <label htmlFor="Crop_Type" className="block text-slate-200 py-2 font-semibold">
                Ürün Tipi
              </label>
              <select
                id="Crop_Type"
                name="Crop_Type"
                className="w-full bg-black/20 border border-slate-600 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                onChange={handleInputChange}
              >
                <option className="text-black" value="Sugarcane">Şeker Kamışı</option>
                <option className="text-black" value="Cotton">Pamuk</option>
                <option className="text-black" value="Millets">Darı</option>
                <option className="text-black" value="Paddy">Çeltik</option>
                <option className="text-black" value="Pulses">Bakliyat</option>
                <option className="text-black" value="Wheat">Buğday</option>
                <option className="text-black" value="Tobacco">Tütün</option>
                <option className="text-black" value="Barley">Arpa</option>
                <option className="text-black" value="Oil seeds">Yağlı Tohumlar</option>
                <option className="text-black" value="Ground Nuts">Yer Fıstığı</option>
                <option className="text-black" value="Maize">Mısır</option>
              </select>
            </div>
          </div>
          {/* Button */}
          <div className="col-span-1 text-center mt-6">
            <button
              type="submit"
              className="w-64 h-14 bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
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

function Fertilizer() {
  const [response, setResponse] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleFormSubmit = async (formValues) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/fertilizer/predict",
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
export default Fertilizer;
