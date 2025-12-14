function Landing() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32 min-h-[80vh] flex flex-col justify-center items-center">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-extrabold tracking-tight text-white sm:text-7xl drop-shadow-lg">
          TARIM
          <span className="relative text-blue-400 ml-3">
            BASİTLEŞTİ
          </span>
          <br />
          ARTIK
          <span className="relative text-blue-400 ml-3">
            YAPAY ZEKA İLE
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg tracking-tight text-slate-300">
          AGRI.AI, YAPAY ZEKA GÜCÜNÜ KULLANARAK TARIM UYGULAMALARINI
          DEVRİMSELLEŞTİREN ÇIĞIR AÇICI BİR GİRİŞİMDİR.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            className="group inline-flex items-center justify-center rounded-full py-3 px-8 text-sm font-semibold focus:outline-none bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg transition-all duration-300"
            href="#features"
          >
            TAHMİNLERİ GÖRÜNTÜLE
          </a>
          <a
            className="group inline-flex ring-1 ring-slate-500 items-center justify-center rounded-full py-3 px-8 text-sm text-slate-300 hover:text-white hover:ring-slate-300 hover:bg-white/10 transition-all duration-300"
            href="https://github.com/bahattinyunus/smart_autonomous_farm"
          >
            KAYNAK KODU GÖRÜNTÜLE
          </a>
        </div>
      </div>
    </>
  );
}

export default Landing;
