function Header({ theme, onToggleTheme }) {
  return (
    <header className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-indigo-900/40 relative overflow-hidden transition-all duration-300">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Відкритий до нових пропозицій
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
            Якимчук Іван
          </h1>
          <p className="text-lg text-indigo-200/90 font-medium">
            Junior Developer <span className="text-indigo-400">/</span> Computer Science Enthusiast
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Кнопка перемикання теми */}
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-indigo-600/80 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg hover:scale-105"
          >
            <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
            <span>{theme === 'dark' ? 'Світла тема' : 'Темна тема'}</span>
          </button>

          <a
            href="https://github.com/VanayPl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-800/80 hover:bg-indigo-600 text-slate-200 hover:text-white border border-slate-700/60 transition-all duration-200 hover:scale-105 text-sm font-medium"
          >
            <span>💻</span> GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
