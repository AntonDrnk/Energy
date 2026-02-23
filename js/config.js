// ===== CONFIGURATION =====
// Контактна інформація - оновіть ці дані під ваші контакти

// Приклад для Telegram:
// - Якщо у вас є username: url: 'https://t.me/your_username'
// - Якщо тільки номер: url: 'https://t.me/+380XXXXXXXXX'

// Приклад для Viber:
// - Замініть +380XXXXXXXXX на ваш номер: url: 'viber://chat?number=%2B380XXXXXXXXX'
// - Або: url: 'viber://contact?number=380XXXXXXXXX'

// Приклад для WhatsApp:
// - Замініть 380XXXXXXXXX на ваш номер (без +): url: 'https://wa.me/380XXXXXXXXX'
// - З повідомленням: url: 'https://wa.me/380XXXXXXXXX?text=Привіт!'

const CONFIG = {
  contacts: {
    telegram: {
      url: 'https://t.me/FPS_Ukraine' // Telegram: @FPS_Ukraine
    },
    viber: {
      url: 'viber://chat?number=%2B380XXXXXXXXX' // Замініть на ваш номер Viber
    },
    whatsapp: {
      url: 'https://wa.me/380XXXXXXXXX' // Замініть на ваш номер WhatsApp (без +)
    }
  },
  
  // Налаштування popup
  popup: {
    delay: 5000, // Затримка перед показом popup (мс)
    enabled: true
  },
  
  // Налаштування таймера
  timer: {
    hours: 24 // Кількість годин для таймера акції
  }
};
