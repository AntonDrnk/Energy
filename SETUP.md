# 🚀 Швидкий старт - Налаштування кнопок месенджерів

## Крок 1: Відкрийте файл конфігурації

Відкрийте файл `js/config.js` у вашому редакторі коду.

## Крок 2: Налаштуйте ваші контакти

### Telegram

**Варіант 1: Якщо у вас є username**
```javascript
telegram: {
  url: 'https://t.me/vash_username' // Замініть vash_username на ваш username
}
```

**Варіант 2: Якщо у вас тільки номер телефону**
```javascript
telegram: {
  url: 'https://t.me/+380501234567' // Замініть на ваш номер з +
}
```

### Viber

```javascript
viber: {
  url: 'viber://chat?number=%2B380501234567' // Замініть на ваш номер
}
```

**Примітка:** `%2B` це закодований символ `+`, тому номер має бути з `%2B` на початку.

### WhatsApp

```javascript
whatsapp: {
  url: 'https://wa.me/380501234567' // Замініть на ваш номер БЕЗ +
}
```

**З попередньо введеним повідомленням:**
```javascript
whatsapp: {
  url: 'https://wa.me/380501234567?text=Привіт!%20Мене%20цікавлять%20енергостанції'
}
```

## Крок 3: Перевірте підключення файлів

Переконайтеся, що в `index.html` підключені всі необхідні файли:

```html
<head>
  ...
  <link rel="stylesheet" href="css/messenger-buttons.css">
</head>

<body>
  ...
  <script src="js/config.js"></script>
  <script src="js/messenger-buttons.js"></script>
</body>
```

## Крок 4: Тестування

1. Відкрийте `index.html` у браузері
2. Перевірте, що кнопки месенджерів з'являються в правому нижньому куті
3. Натисніть на кожну кнопку та переконайтеся, що вони відкривають правильні діалоги

## 🎨 Кастомізація

### Зміна розташування кнопок

У файлі `css/messenger-buttons.css` знайдіть `.messenger-buttons` та змініть:

```css
.messenger-buttons {
  bottom: 20px;  /* Відстань від низу */
  right: 20px;   /* Відстань від правого краю */
}
```

### Горизонтальне розташування

Додайте клас `horizontal` до контейнера кнопок у `js/messenger-buttons.js`:

```javascript
buttonsContainer.className = 'messenger-buttons horizontal';
```

### Вимкнення pulse анімації

У файлі `css/messenger-buttons.css` видаліть або закоментуйте:

```css
.messenger-button.pulse {
  animation: pulse 2s infinite;
}
```

## ❓ Часті питання

**Q: Кнопки не з'являються**
A: Перевірте, чи правильно підключені файли CSS та JS у HTML.

**Q: Кнопки не відкривають месенджери**
A: Перевірте правильність посилань у `js/config.js`.

**Q: Як додати ще один месенджер?**
A: Додайте новий блок у `js/config.js` та створіть відповідний стиль у `css/messenger-buttons.css`.

## 📱 Мобільна оптимізація

Кнопки автоматично адаптуються для мобільних пристроїв:
- Менші розміри на екранах < 768px
- Tooltip прихований на мобільних
- Компактний режим при скролі
