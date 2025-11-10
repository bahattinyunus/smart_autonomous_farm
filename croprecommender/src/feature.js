import "./feature.css";
function Feature() {
  return (
    <>
      <div className="flex flex-row justify-center py-2 px-4">
  <div className="card m-10 flex flex-col h-[calc(100vh-120px)]">
          <h3 className="text-3xl font-serif font-bold mb-10 text-blue-600">
            <a> Ürün Tavsiye Modeli </a>
          </h3>
          <a href="#croprecommender">
            <button>Şimdi Dene</button>
          </a>
        </div>
  <div className="card m-10 flex flex-col h-[calc(100vh-120px)]">
          <h3 className="text-3xl font-serif font-bold mb-16 text-blue-600">
            Gübre Tavsiyesi
          </h3>
          <a href="#fertilizer">
            <button>Şimdi Dene</button>
          </a>
        </div>
  <div className="card m-10 flex flex-col h-[calc(100vh-120px)]">
          <h3 className="text-3xl font-serif font-bold mb-16 text-blue-600">
            Bitki Hastalığı Tespiti
          </h3>
          <a href="#plantdisease">
            <button>Şimdi Dene</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Feature;
