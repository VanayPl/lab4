import { useState, useEffect } from 'react';

function Footer({ theme }) {
  const [sysInfo, setSysInfo] = useState(null);

  // 1. Системна інформація у футері через useEffect та localStorage
  useEffect(() => {
    const rawData = {
      osPlatform: navigator.platform || (navigator.userAgentData ? navigator.userAgentData.platform : 'Unknown OS'),
      userAgent: navigator.userAgent,
      language: navigator.language,
      recordedAt: new Date().toLocaleTimeString('uk-UA')
    };

    localStorage.setItem('reactClientSysInfo', JSON.stringify(rawData));

    const saved = localStorage.getItem('reactClientSysInfo');
    if (saved) {
      setSysInfo(JSON.parse(saved));
    }
  }, []);

  return (
    <footer className="mt-8 pt-8 pb-6 border-t border-slate-200/80 dark:border-slate-800 text-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
        <p className="font-medium text-slate-600 dark:text-slate-400">
          &copy; 2026 Якимчук Іван. Усі права захищено.
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
          <span>Стек:</span>
          <span className="text-sky-500 font-semibold">React 19</span>
          <span>•</span>
          <span className="text-amber-500 font-semibold">Fetch API</span>
          <span>•</span>
          <span className="text-teal-500 font-semibold">LocalStorage</span>
        </div>
      </div>

      {sysInfo && (
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
            <span>💻</span> Системні параметри клієнта (зчитано з localStorage):
          </div>
          <div>
            <strong>Платформа:</strong> {sysInfo.osPlatform} | <strong>Мова:</strong> {sysInfo.language} | <strong>Час:</strong> {sysInfo.recordedAt}
          </div>
          <div className="text-[11px] font-mono text-slate-400 truncate mt-1">
            {sysInfo.userAgent}
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
