import bg from "./img/bg-2.jpg";

function Des() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="px-16  lg:w-1/2 w-full mb-10 lg:mb-0 rounded-2xl overflow-hidden h-[calc(100vh-80px)]">
            <img alt="feature" className="rounded-xl" src={bg} />
          </div>

          <div className="flex flex-col flex-wrap lg:w-1/2 lg:pl-2 lg:text-left text-center">
            <div className="flex flex-col lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-blue-600 font-bold text-2xl title-font mb-2 mr-3">
                  NEDEN AGRI.AI ?
                </h2>
                <p className="leading-relaxed text-lg mb-2">
                  AGRI.AI, çiftçilere ve hobi bahçıvanlarına yardımcı olmak için üç güçlü
                  yapay zeka modelini birleştiren entegre bir platformdur. Bu platform,
                  üretimi artırmayı ve kaynak kullanımını optimize etmeyi hedefler.
                </p>
                <h4 className="text-black-900 font-bold text-lg">
                  1. Crop Recommendation Model
                </h4>
                <p className="text-black-900 text-lg mb-2">
                  Takes user-input details such as nitrogen, potassium,
                  phosphorous levels, temperature, humidity, and pH of the soil.
                  Using this information, it predicts the most suitable crop
                  varieties that can be grown, ensuring optimal yield and
                  resource utilization.
                </p>
              </div>
              <div className="flex-grow">
                <h4 className="text-black-900 font-bold text-lg">
                  2. Plant Disease Detection
                </h4>
                <p className="text-black-900 text-lg mb-2">
                  Bitkilerin sağlığını korumak başarılı bir hasat için çok önemlidir. İkinci
                  modelimiz, bitki hastalıklarını görüntü tabanlı tespit ederek tanı koymaya
                  yardımcı olur. Kullanıcılar bitki fotoğraflarını yükleyebilir ve model
                  anında geri bildirim sağlayarak zamanında müdahale imkânı sunar.
                </p>
              </div>
              <div className="flex-grow">
                <h4 className="text-black-900 font-bold text-lg">
                  3. Fertilizer Recommender
                </h4>
                <p className="text-black-900 text-lg mb-2">
                  Bitki türü, toprak özellikleri ve tespit edilen hastalıklara göre uygun
                  gübreleri önerir. (Bazı özellikler hâlâ geliştirme aşamasındadır.)
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
