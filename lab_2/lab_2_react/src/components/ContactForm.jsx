import { useState, useEffect } from 'react';

function ContactForm({ theme }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 3. Відкриття модального вікна через 1 хвилину (60 000 мс)
    const isDismissed = sessionStorage.getItem('contactModalClosed');
    if (isDismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer); // Очищення таймера
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('contactModalClosed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all ${
        theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 dark:hover:text-white text-2xl font-bold transition-colors"
        >
          &times;
        </button>

        <div className="mb-5">
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full mb-2">
            Зворотний зв'язок
          </span>
          <h3 className="text-xl sm:text-2xl font-bold">Зв'яжіться зі мною</h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Ви пробули на сайті понад 1 хвилину. Буду вдячний за ваші відгуки чи пропозиції!
          </p>
        </div>

        <form
          action="https://formspree.io/f/xvgzeykw"
          method="POST"
          onSubmit={() => sessionStorage.setItem('contactModalClosed', 'true')}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1">
              Ім'я
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Іван Якимчук"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                theme === 'dark' ? 'bg-slate-800 border-slate-700 focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1">
              Електронна пошта (Email)
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="ivan.yakymchuk@example.com"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                theme === 'dark' ? 'bg-slate-800 border-slate-700 focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1">
              Номер телефону
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+380982593639"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                theme === 'dark' ? 'bg-slate-800 border-slate-700 focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1">
              Текст повідомлення
            </label>
            <textarea
              name="message"
              rows="3"
              required
              placeholder="Напишіть ваші пропозиції чи запитання..."
              className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all resize-none ${
                theme === 'dark' ? 'bg-slate-800 border-slate-700 focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
              }`}
            ></textarea>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-blue-500/25"
            >
              Надіслати
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="py-3 px-5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 text-sm font-medium transition-all"
            >
              Закрити
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
