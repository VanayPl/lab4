import { useState, useEffect } from 'react';

function Reviews({ theme }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Варіант №28: jsonplaceholder.typicode.com/posts/28/comments
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/28/comments');
        if (!response.ok) {
          throw new Error(`HTTP помилка: ${response.status}`);
        }
        const data = await response.json();
        setComments(data);
      } catch (err) {
        console.error('Помилка завантаження відгуків:', err);
        setError('Не вдалося отримати відгуки попередніх роботодавців.');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 shadow-sm ${
      theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200/80 text-slate-800'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6 pb-4 border-b border-slate-200/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 font-bold text-lg">
            ⭐
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Відгуки роботодавців
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Дані отримано асинхронно через JSONPlaceholder REST API
            </p>
          </div>
        </div>
        <span className="px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 text-xs font-semibold rounded-full w-fit">
          {comments.length} відгуків
        </span>
      </div>

      {loading && (
        <div className="py-8 text-center text-slate-500 flex items-center justify-center gap-2">
          <span className="animate-spin text-xl">⏳</span> Завантаження відгуків...
        </div>
      )}

      {error && (
        <div className="p-4 rounded-xl bg-red-50 text-red-600 border border-red-200 text-sm">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className={`p-4 rounded-2xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                theme === 'dark' 
                  ? 'bg-slate-800/60 border-slate-700/60 hover:border-amber-500/50' 
                  : 'bg-slate-50/70 border-slate-200/80 hover:border-amber-400'
              }`}
            >
              <div>
                <h4 className="font-bold text-sm sm:text-base capitalize mb-1 text-amber-600 dark:text-amber-400">
                  {comment.name}
                </h4>
                <p className="text-xs text-slate-400 mb-2 font-mono">
                  ✉️ {comment.email}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  "{comment.body}"
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-200/40 text-[11px] text-slate-400">
                Відгук #{comment.id}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;
