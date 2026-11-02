/**
 * Автор: Якимчук Іван (гр. КБ-202)
 */

document.addEventListener('DOMContentLoaded', () => {
    initSystemInfo();
    initThemeManager();
    initReviewsLoader();
    initModalTimer();
});

// 1. ЗБЕРІГАННЯ ДАНИХ У БРАУЗЕРІ (LocalStorage)
function initSystemInfo() {
    const systemInfo = {
        platform: navigator.platform || (navigator.userAgentData ? navigator.userAgentData.platform : 'Unknown OS'),
        userAgent: navigator.userAgent,
        language: navigator.language,
        screen: `${window.screen.width}x${window.screen.height}`,
        cookiesEnabled: navigator.cookieEnabled,
        savedTime: new Date().toLocaleTimeString('uk-UA')
    };

    // Збереження у localStorage
    localStorage.setItem('clientSystemInfo', JSON.stringify(systemInfo));

    // Відображення збереженої інформації у футері сайту
    const savedStr = localStorage.getItem('clientSystemInfo');
    const infoTextElem = document.getElementById('systemInfoText');
    if (savedStr && infoTextElem) {
        const data = JSON.parse(savedStr);
        infoTextElem.innerHTML = `
            <strong>Платформа / ОС:</strong> ${data.platform} &nbsp;|&nbsp; 
            <strong>Мова інтерфейсу:</strong> ${data.language} &nbsp;|&nbsp; 
            <strong>Роздільна здатність:</strong> ${data.screen} &nbsp;|&nbsp;
            <strong>Час фіксації:</strong> ${data.savedTime}<br>
            <span style="font-size: 0.8rem; opacity: 0.8; word-break: break-all;"><strong>User-Agent:</strong> ${data.userAgent}</span>
        `;
    }
}

// 2. ВІДОБРАЖЕННЯ ДИНАМІЧНОГО ВМІСТУ З СЕРВЕРА (Fetch API - Варіант 28)
async function initReviewsLoader() {
    const container = document.getElementById('reviewsContainer');
    const loader = document.getElementById('reviewsLoader');
    // Порядковий номер варіанта: 28 -> posts/28/comments
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/28/comments';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP помилка: ${response.status}`);
        }
        const comments = await response.json();
        loader.style.display = 'none';

        // Відобразити отримані коментарі у порядку їх отримання
        comments.forEach(comment => {
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `
                <div>
                    <h4>${comment.name}</h4>
                    <div class="email">✉️ ${comment.email}</div>
                    <p>«${comment.body}»</p>
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 10px; border-top: 1px solid var(--border-color); padding-top: 6px;">
                    Відгук #${comment.id}
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Помилка завантаження відгуків:', error);
        loader.textContent = '❌ Не вдалося отримати відгуки із сервера.';
        loader.style.color = '#ef4444';
    }
}

// 3. НАДСИЛАННЯ ФОРМИ ЗВОРОТНОГО ЗВ'ЯЗКУ (Таймер 1 хвилина)
function initModalTimer() {
    const modal = document.getElementById('contactModal');
    const closeBtn = document.getElementById('closeModalBtn');
    const form = document.getElementById('contactForm');

    // Перевіряємо, чи користувач уже закрив форму в цій сесії
    if (sessionStorage.getItem('contactModalClosed')) {
        return;
    }

    // Показуємо модальне вікно через 1 хвилину (60 000 мс)
    const timer = setTimeout(() => {
        if (!sessionStorage.getItem('contactModalClosed')) {
            modal.classList.remove('hidden');
        }
    }, 60000);

    const closeModal = () => {
        modal.classList.add('hidden');
        sessionStorage.setItem('contactModalClosed', 'true');
        clearTimeout(timer);
    };

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    form.addEventListener('submit', () => {
        sessionStorage.setItem('contactModalClosed', 'true');
    });
}

// 4. ПЕРЕХІД НА НІЧНИЙ/ДЕННИЙ РЕЖИМ (Розумне та ручне перемикання)
function initThemeManager() {
    const body = document.body;
    const toggleBtn = document.getElementById('themeToggleBtn');
    const iconSpan = document.getElementById('themeIcon');
    const textSpan = document.getElementById('themeText');

    // Денна тема: від 07:00 до 21:00; нічна: увесь інший час
    const currentHour = new Date().getHours();
    const isDayTime = currentHour >= 7 && currentHour < 21;
    const defaultAutoTheme = isDayTime ? 'light' : 'dark';

    // Пріоритет: збережений вибір користувача у localStorage або автовизначення
    const savedTheme = localStorage.getItem('appTheme') || defaultAutoTheme;
    applyTheme(savedTheme);

    toggleBtn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-theme');
        const newTheme = isDark ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('appTheme', newTheme);
    });

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            iconSpan.textContent = '☀️';
            textSpan.textContent = 'Світла тема';
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            iconSpan.textContent = '🌙';
            textSpan.textContent = 'Темна тема';
        }
    }
}
