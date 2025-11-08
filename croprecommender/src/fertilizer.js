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
      <div className="bg-gradient-to-r from-blue-400 to-violet-400 rounded-lg px-4 m-8 h-[calc(100vh-80px)]">
        <form onSubmit={handleSubmit}>
          <div className="text-2xl font-bold flex justify-center items-center py-8">
            <h2 className="rounded-lg text-center">
              GÜBRE TAVSİYE MODELİ
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
            {/* Humidity Input */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <label
                htmlFor="Humidity"
                className="block text-gray-700 py-2 font-bold"
              >
                Nem
              </label>
              <input
                type="number"
                id="Humidity"
                name="Humidity"
                placeholder="Nem değerini girin (%)"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                step="0"
                onChange={handleInputChange}
              />
            </div>

            {/* Moisture Input */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <label
                htmlFor="Moisture"
                className="block text-gray-700 py-2 font-bold"
              >
                Toprak Nemi
              </label>
              <input
                type="number"
                id="Moisture"
                name="Moisture"
                placeholder="Toprak nemi değerini girin"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                step="0"
                onChange={handleInputChange}
              />
            </div>

            {/* Nitrogen Input */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <label
                htmlFor="Nitrogen"
                className="block text-gray-700 py-2 font-bold"
              >
                Azot
              </label>
              <input
                type="number"
                id="Nitrogen"
                name="Nitrogen"
                placeholder="Azot değerini girin"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                step="0"
                onChange={handleInputChange}
              />
            </div>

            {/* Temparature Input */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <label
                htmlFor="Temparature"
                className="block text-gray-700 py-2 font-bold"
              >
                Sıcaklık
              </label>
              <input
                type="number"
                step="0.1"
                id="Temparature"
                name="Temparature"
                placeholder="Sıcaklık değerini girin (°C)"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Potassium Input */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <label
                htmlFor="Potassium"
                className="block text-gray-700 py-2 font-bold"
              >
                Potasyum
              </label>
              <input
                type="number"
                step="1"
                id="Potassium"
                name="Potassium"
                placeholder="Potasyum değerini girin"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Phosphorous Input */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <label
                htmlFor="Phosphorous"
                className="block text-gray-700 py-2 font-bold"
              >
                Fosfor
              </label>
              <input
                type="number"
                step="1"
                id="Phosphorous"
                name="Phosphorous"
                placeholder="Fosfor değerini girin"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Crop_Type Input */}
            <div className="col-span-1">
              <label
                htmlFor="Soil_Type"
                className="block text-gray-700 py-2 font-bold"
              >
                Toprak Tipi
              </label>
              <select
                id="Soil_Type"
                name="Soil_Type"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={handleInputChange}
              >
                <option value="Loamy">Tınlı</option>
                <option value="Sandy">Kumlu</option>
                <option value="Clayey">Killi</option>
                <option value="Black">Siyah</option>
                <option value="Red">Kırmızı</option>
              </select>
            </div>
            {/* Crop_Type Input */}
            <div className="col-span-1">
              <label
                htmlFor="Crop_Type"
                className="block text-gray-700 py-2 font-bold"
              >
                Ürün Tipi
              </label>
              <select
                id="Crop_Type"
                name="Crop_Type"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={handleInputChange}
              >
                <option value="Sugarcane">Şeker Kamışı</option>
                <option value="Cotton">Pamuk</option>
                <option value="Millets">Darı</option>
                <option value="Paddy">Çeltik</option>
                <option value="Pulses">Bakliyat</option>
                <option value="Wheat">Buğday</option>
                <option value="Tobacco">Tütün</option>
                <option value="Barley">Arpa</option>
                <option value="Oil seeds">Yağlı Tohumlar</option>
                <option value="Ground Nuts">Yer Fıstığı</option>
                <option value="Maize">Mısır</option>
              </select>
            </div>
          </div>
          {/* Button */}
          <div className="col-span-1 text-center px-12 py-8">
            <button
              type="submit"
              className="w-64 h-14 bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
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
        "https://karthikfertapi.onrender.com/predict",
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
