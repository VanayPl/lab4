function Education({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section className={`rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md border transition-all duration-300 ${
      isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200/80 text-slate-800'
    }`}>
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-lg">
          🎓
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Освіта та мовні компетенції
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Академічна база та рівень володіння мовами
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="relative pl-6 border-l-2 border-indigo-500 group">
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-500 group-hover:scale-125 transition-transform duration-200"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <h3 className="text-lg font-semibold group-hover:text-indigo-500 transition-colors">
              Поглиблене вивчення інформатики
            </h3>
            <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full w-fit">
              2022 — 2026
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 font-medium">
            Спеціалізований ліцей із поглибленим вивченням точних дисциплін
          </p>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              4 роки системного вивчення комп'ютерних наук, структур даних та алгоритмів.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              Розв'язання практичних олімпіадних та алгоритмічних задач на мовах програмування.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              Опанування базових принципів архітектури вебзастосунків та кібербезпеки.
            </li>
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-slate-500">
            Мовні компетенції
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
              isDark ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200/60'
            }`}>
              <div>
                <p className="font-semibold text-sm">Українська</p>
                <p className="text-xs text-slate-500">Рідна / вільно</p>
              </div>
              <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold rounded-lg">
                Native
              </span>
            </div>
            <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
              isDark ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200/60'
            }`}>
              <div>
                <p className="font-semibold text-sm">Англійська</p>
                <p className="text-xs text-slate-500">Технічна література & документація</p>
              </div>
              <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-bold rounded-lg">
                B1 / B2
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
