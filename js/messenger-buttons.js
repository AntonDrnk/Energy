// ===== MESSENGER BUTTONS FUNCTIONALITY =====
(function() {
  'use strict';

  // Отримуємо конфігурацію (якщо файл config.js завантажено)
  const getConfig = () => {
    if (typeof CONFIG !== 'undefined' && CONFIG.contacts) {
      return CONFIG.contacts;
    }
    
    // Fallback конфігурація
    return {
      telegram: {
        url: 'https://t.me/FPS_Ukraine' // Замініть на ваш Telegram
      },
      viber: {
        phone: '+380XXXXXXXXX', // Замініть на ваш номер
        url: 'viber://chat?number=%2B380XXXXXXXXX'
      },
      whatsapp: {
        phone: '+380XXXXXXXXX', // Замініть на ваш номер
        message: 'Привіт! Мене цікавлять автономні енергостанції Victron.',
        url: 'https://wa.me/380XXXXXXXXX'
      }
    };
  };

  // Створюємо кнопки месенджерів
  function createMessengerButtons() {
    const config = getConfig();
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'messenger-buttons';
    buttonsContainer.id = 'messenger-buttons';

    // Telegram button
    if (config.telegram && config.telegram.url) {
      const telegramBtn = createButton(
        'telegram',
        'Telegram',
        getTelegramIcon(),
        config.telegram.url
      );
      buttonsContainer.appendChild(telegramBtn);
    }

    // Viber button
    if (config.viber && config.viber.url) {
      const viberBtn = createButton(
        'viber',
        'Viber',
        getViberIcon(),
        config.viber.url
      );
      buttonsContainer.appendChild(viberBtn);
    }

    // WhatsApp button
    if (config.whatsapp && config.whatsapp.url) {
      const whatsappBtn = createButton(
        'whatsapp',
        'WhatsApp',
        getWhatsAppIcon(),
        config.whatsapp.url
      );
      buttonsContainer.appendChild(whatsappBtn);
    }

    document.body.appendChild(buttonsContainer);
    
    // Додаємо pulse ефект до першої кнопки
    const firstButton = buttonsContainer.querySelector('.messenger-button');
    if (firstButton) {
      setTimeout(() => {
        firstButton.classList.add('pulse');
      }, 1000);
    }
  }

  // SVG іконка Telegram
  function getTelegramIcon() {
    return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.279l-1.68 7.925c-.125.562-.45.699-.91.434l-2.51-1.85-1.21 1.16c-.14.14-.26.26-.534.26l.188-2.66 4.66-4.21c.203-.18-.044-.28-.314-.1l-5.76 3.63-2.48-.77c-.54-.17-.555-.54.11-.81l9.58-3.69c.45-.17.85.1.7.65z" fill="#ffffff"/>
    </svg>`;
  }

  // SVG іконка Viber
  function getViberIcon() {
    return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.007 1.476 5.715L.03 24l6.305-1.455c1.714.919 3.685 1.472 5.682 1.472 6.624 0 11.99-5.367 11.99-11.988C23.007 5.367 17.641.001 12.017.001zm.162 18.305c-1.839 0-3.539-.514-5.002-1.386l-.359-.214-3.754.865.85-3.648-.224-.375c-1.121-1.883-1.714-4.037-1.714-6.363 0-5.289 4.318-9.576 9.642-9.576 5.325 0 9.642 4.287 9.642 9.576 0 5.29-4.317 9.577-9.642 9.577zm5.423-7.076c-.15-.075-1.647-.812-1.902-.904-.255-.09-.441-.135-.627.135-.186.271-.721.904-.884 1.089-.163.186-.326.209-.605.075-.279-.135-1.178-.434-2.244-1.383-.829-.739-1.39-1.65-1.553-1.928-.163-.279-.018-.43.122-.568.126-.126.279-.326.419-.489.14-.163.186-.279.279-.465.093-.186.047-.349-.023-.488-.07-.14-.627-1.51-.859-2.07-.226-.543-.457-.47-.627-.479-.163-.008-.349-.008-.535-.008-.186 0-.489.07-.744.349-.255.279-.977.954-.977 2.327 0 1.372 1.002 2.699 1.141 2.884.14.186 1.968 2.996 4.769 4.21.663.295 1.18.47 1.581.601.666.21 1.272.18 1.751.11.537-.08 1.647-.674 1.879-.893.232-.219.465-.163.791-.093.326.07 2.067.975 2.423 1.155.356.18.604.279.693.434.09.15.09.872-.209 1.709-.279.837-1.372 1.58-1.879 1.65-.465.07-1.023.12-1.581-.093z" fill="#ffffff"/>
    </svg>`;
  }

  // SVG іконка WhatsApp
  function getWhatsAppIcon() {
    return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.984-3.648-.233-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="#ffffff"/>
    </svg>`;
  }

  // Створюємо окрему кнопку
  function createButton(type, label, icon, url) {
    const button = document.createElement('a');
    button.className = `messenger-button messenger-button-${type}`;
    button.href = url;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.setAttribute('aria-label', `Написати в ${label}`);
    
    // Додаємо бульбашки
    const bubble1 = document.createElement('span');
    bubble1.className = 'bubble';
    const bubble2 = document.createElement('span');
    bubble2.className = 'bubble';
    
    const iconSpan = document.createElement('span');
    iconSpan.className = 'messenger-button-icon';
    iconSpan.innerHTML = icon;
    
    const tooltip = document.createElement('span');
    tooltip.className = 'messenger-button-tooltip';
    tooltip.textContent = label;
    
    button.appendChild(bubble1);
    button.appendChild(bubble2);
    button.appendChild(iconSpan);
    button.appendChild(tooltip);
    
    // Відстеження кліків
    button.addEventListener('click', function() {
      trackMessengerClick(type, label);
    });
    
    return button;
  }

  // Відстеження кліків по месенджерах
  function trackMessengerClick(type, label) {
    // Google Analytics або інша аналітика
    if (typeof gtag !== 'undefined') {
      gtag('event', 'messenger_click', {
        event_category: 'Contact',
        event_label: label,
        messenger_type: type
      });
    }
    
    console.log(`Messenger clicked: ${label} (${type})`);
  }

  // Адаптивна поведінка при скролі
  function handleScroll() {
    const buttonsContainer = document.getElementById('messenger-buttons');
    if (!buttonsContainer) return;
    
    const scrollY = window.scrollY || window.pageYOffset;
    
    if (scrollY > 300) {
      buttonsContainer.classList.add('compact');
    } else {
      buttonsContainer.classList.remove('compact');
    }
  }

  // Ініціалізація
  function init() {
    // Чекаємо, поки DOM завантажиться
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createMessengerButtons);
    } else {
      createMessengerButtons();
    }
    
    // Додаємо обробник скролу
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Запускаємо ініціалізацію
  init();
})();
