import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  // 4. Розумний перемикач теми
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Автоматичне перемикання теми: 07:00 - 21:00 -> light, інакше -> dark
    const currentHour = new Date().getHours();
    const isDayTime = currentHour >= 7 && currentHour < 21;
    const defaultTheme = isDayTime ? 'light' : 'dark';

    const savedTheme = localStorage.getItem('appTheme') || defaultTheme;
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('appTheme', nextTheme);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-100/80 text-slate-800'
    } py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased`}>
      <div className="max-w-4xl mx-auto space-y-6">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        
        <main className="space-y-6">
          <Experience theme={theme} />
          <Education theme={theme} />
          {/* 2. Відгуки попередніх роботодавців (Варіант 28) */}
          <Reviews theme={theme} />
        </main>

        {/* 1. Футер із системною інформацією з localStorage */}
        <Footer theme={theme} />

        {/* 3. Модальне вікно форми зворотного зв'язку (показ через 1 хв) */}
        <ContactForm theme={theme} />
      </div>
    </div>
  );
}

export default App;
