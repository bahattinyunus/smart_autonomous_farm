import React, { useState } from "react";

function Plantdis() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    const file = e.target.files[0];
    setSelectedFile(file);

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    setResult(null); // Reset result on new file selection
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/api/disease/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("API hatası");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Hata:", error);
      alert("Tahmin sırasında bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="glass-card p-8 m-8 w-full max-w-4xl shadow-2xl flex flex-col items-center">
        <h2 className="text-3xl font-bold py-6 text-white text-center drop-shadow-md">
          BİTKİ HASTALIĞI TESPİTİ
        </h2>

        <p className="text-slate-200 mb-8 text-center max-w-2xl text-lg">
          Bitkinizin yaprağının fotoğrafını yükleyin, yapay zeka modelimiz hastalığı teşhis etsin.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          <div className="w-full max-w-lg mb-6">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-white/10 border-slate-500 hover:border-blue-500 transition-all"
            >
              {preview ? (
                <img src={preview} alt="Preview" className="h-full object-contain rounded-lg" />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-10 h-10 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="mb-2 text-sm text-slate-400"><span className="font-semibold">Yüklemek için tıklayın</span> veya sürükleyip bırakın</p>
                  <p className="text-xs text-slate-500">PNG, JPG (MAX. 5MB)</p>
                </div>
              )}
              <input id="file-upload" type="file" className="hidden" onChange={onSelectFile} accept="image/*" />
            </label>
          </div>

          <button
            type="submit"
            disabled={!selectedFile || loading}
            className={`w-64 h-14 font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ${!selectedFile || loading
                ? "bg-gray-600 cursor-not-allowed text-gray-400"
                : "bg-red-600 hover:bg-red-500 text-white transform hover:scale-105"
              }`}
          >
            {loading ? "Analiz Ediliyor..." : "Hastalığı Tespit Et"}
          </button>
        </form>

        {result && (
          <div className="mt-8 p-6 glass rounded-xl w-full max-w-lg border-l-4 border-red-500 animate-fade-in">
            <h3 className="text-xl font-bold text-white mb-2">Analiz Sonucu:</h3>
            <p className="text-2xl text-red-400 font-extrabold mb-2">
              {result.prediction.replace(/_/g, " ")}
            </p>
            <div className="text-slate-300 text-sm">
              <p>Güven Skoru: %{(result.confidence * 100).toFixed(0)}</p>
              <p className="mt-2 italic text-yellow-400 text-xs">
                {result.message}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Plantdis;
