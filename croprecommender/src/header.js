function Header() {
  return (
    <>
      <header className="py-6 fixed w-full top-0 z-50 transition-all duration-300 bg-black/10 backdrop-blur-lg border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between items-center">
            <div className="flex items-center md:gap-x-12">
              <a
                className="inline-block rounded-lg px-2 py-1 text-2xl font-mono font-bold text-white hover:text-blue-400 transition-colors"
                href="/"
              >
                AGRI.AI
              </a>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-4">
              <div className="hidden md:flex md:gap-x-8 font-medium">
                <a
                  className="inline-block rounded-lg px-2 py-1 text-lg text-slate-200 hover:text-white hover:bg-white/10 transition-all"
                  href="#about"
                >
                  Hakkında
                </a>
                <a
                  className="inline-block rounded-lg px-2 py-1 text-lg text-slate-200 hover:text-white hover:bg-white/10 transition-all"
                  href="#features"
                >
                  Özellikler
                </a>

                <a
                  className="inline-block rounded-lg px-2 py-1 text-lg text-slate-200 hover:text-white hover:bg-white/10 transition-all"
                  href="#contact"
                >
                  İletişim
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
