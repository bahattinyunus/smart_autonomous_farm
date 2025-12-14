import bg from "./img/bg-2.jpg";

function Des() {
  return (
    <>
      <section className="text-slate-300 body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap items-center">
          <div className="px-16 lg:w-1/2 w-full mb-10 lg:mb-0 rounded-2xl overflow-hidden glass-card p-4">
            <img alt="feature" className="rounded-xl w-full object-cover h-full" src={bg} />
          </div>

          <div className="flex flex-col flex-wrap lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col lg:items-start items-center">
              <div className="flex-grow mb-8">
                <h2 className="text-white font-extrabold text-4xl title-font mb-4 mr-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                  NEDEN AGRI.AI ?
                </h2>
                <p className="leading-relaxed text-lg mb-2 text-slate-200">
                  AGRI.AI, çiftçilere ve hobi bahçıvanlarına yardımcı olmak için üç güçlü
                  yapay zeka modelini birleştiren entegre bir platformdur. Bu platform,
                  üretimi artırmayı ve kaynak kullanımını optimize etmeyi hedefler.
                </p>
              </div>

              <div className="flex-grow mb-6">
                <h4 className="text-white font-bold text-xl mb-2 flex items-center">
                  <span className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                  Crop Recommendation Model
                </h4>
                <p className="text-slate-400 text-lg mb-2 ml-11">
                  Azot, fosfor, potasyum, sıcaklık, nem ve pH gibi toprak verilerini analiz ederek
                  en verimli ürün çeşidini tahmin eder ve kaynak kullanımını optimize eder.
                </p>
              </div>

              <div className="flex-grow mb-6">
                <h4 className="text-white font-bold text-xl mb-2 flex items-center">
                  <span className="bg-red-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                  Plant Disease Detection
                </h4>
                <p className="text-slate-400 text-lg mb-2 ml-11">
                  Görüntü işleme teknolojisi ile bitki hastalıklarını erken teşhis eder.
                  Kullanıcılar fotoğrafları yükleyerek anında tanı ve çözüm önerileri alabilir.
                </p>
              </div>

              <div className="flex-grow">
                <h4 className="text-white font-bold text-xl mb-2 flex items-center">
                  <span className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                  Fertilizer Recommender
                </h4>
                <p className="text-slate-400 text-lg mb-2 ml-11">
                  Bitki türü ve toprak özelliklerine göre en uygun gübreyi önererek
                  verimliliği artırır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Des;
