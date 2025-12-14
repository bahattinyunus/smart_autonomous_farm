import "./feature.css";
function Feature() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center py-2 px-4 gap-8">
        <div className="glass-card m-4 flex flex-col items-center justify-center h-[400px] w-full max-w-sm p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-bold mb-10 text-white text-center drop-shadow-md">
            Ürün Tavsiyesi
          </h3>
          <a href="#croprecommender">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all">Şimdi Dene</button>
          </a>
        </div>

        <div className="glass-card m-4 flex flex-col items-center justify-center h-[400px] w-full max-w-sm p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-bold mb-10 text-white text-center drop-shadow-md">
            Gübre Tavsiyesi
          </h3>
          <a href="#fertilizer">
            <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all">Şimdi Dene</button>
          </a>
        </div>

        <div className="glass-card m-4 flex flex-col items-center justify-center h-[400px] w-full max-w-sm p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-bold mb-10 text-white text-center drop-shadow-md">
            Hastalık Tespiti
          </h3>
          <a href="#plantdisease">
            <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all">Şimdi Dene</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Feature;
