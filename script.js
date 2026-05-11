<<<<<<< HEAD
const socialData = {
  discord: {
    title: '🎮 Discord Server',
    description: 'Присоединяйся к моему Discord серверу! Здесь мы общаемся, играем вместе и делимся новостями.',
    features: [
      '💬 Активное комьюнити',
      '🎮 Совместные игры',
      '📢 Анонсы стримов',
      '🎁 Розыгрыши и ивенты'
    ],
    link: 'https://discord.gg/dcFgZUFG7e',
    buttonText: 'Присоединиться'
  },
  fear: {
    title: '🌐 Fear Project',
    description: 'Официальный публичный сервер Fear Project. Присоединяйся к нашему проекту!',
    features: [
      '🎯 Уникальный контент',
      '👥 Дружное сообщество',
      '🔥 Регулярные обновления',
      '⚡ Активная поддержка'
    ],
    link: 'https://fearproject.ru',
    buttonText: 'Перейти на сайт'
  },
  twitch: {
    title: '📺 Twitch Channel',
    description: 'Смотри мои стримы на Twitch! Играю в разные игры, общаюсь с чатом и создаю контент.',
    features: [
      '🎮 Разнообразные игры',
      '💬 Общение с чатом',
      '🎬 Качественный контент',
      '⏰ Регулярные стримы'
    ],
    link: 'https://www.twitch.tv/santa_game2555',
    buttonText: 'Смотреть стримы'
  },
  youtube: {
    title: '📺 YouTube Channel',
    description: 'Подписывайся на мой YouTube канал! Здесь ты найдешь интересные видео, гайды и развлекательный контент.',
    features: [
      '🎬 Интересные видео',
      '📚 Полезные гайды',
      '🎮 Игровой контент',
      '⚡ Регулярные обновления'
    ],
    link: 'https://www.youtube.com/@santa-u5f',
    buttonText: 'Подписаться'
  },
  'telegram-channel': {
    title: '📢 Telegram Channel',
    description: 'Подписывайся на мой Telegram канал для новостей, анонсов и эксклюзивного контента!',
    features: [
      '📰 Новости и анонсы',
      '🎬 Эксклюзивный контент',
      '⚡ Быстрые обновления',
      '📸 Фото и видео'
    ],
    link: 'https://t.me/santa2555555channal',
    buttonText: 'Подписаться'
  },
  'telegram-contact': {
    title: '💬 Telegram Contact',
    description: 'Свяжись со мной напрямую через Telegram для вопросов, предложений или сотрудничества.',
    features: [
      '📩 Прямая связь',
      '🤝 Сотрудничество',
      '💡 Предложения',
      '❓ Вопросы и ответы'
    ],
    link: 'https://t.me/santa2555555',
    buttonText: 'Написать'
  },
  'clan': {
    title: '🎮 Лучший клан "ЧИТОРЫ"',
    description: 'Присоединяйся к нашему игровому клану! Мы играем вместе, участвуем в турнирах и просто весело проводим время.',
    features: [
      '👥 Дружная команда',
      '🏆 Участие в турнирах',
      '🎮 Совместные игры',
      '💪 Прокачка навыков',
      '🎉 Веселая атмосфера',
      '⚡ Активное комьюнити'
    ],
    link: 'https://discord.gg/MUum5ZJXkH',
    buttonText: 'Вступить в клан'
  },
  'donation': {
    title: '💰 Поддержать донатом',
    description: 'Хочешь поддержать мой контент? Любой донат помогает развивать канал и создавать больше качественного контента для вас!',
    features: [
      '❤️ Поддержка стримера',
      '🎁 Возможность отправить сообщение',
      '⭐ Появление в топе донатеров',
      '🔔 Уведомление на стриме'
    ],
    link: 'https://www.donationalerts.com/r/santa_game2555',
    buttonText: 'Задонатить'
  },
  'price-list': {
    title: '💰 Прайс-лист услуг',
    description: 'Актуальные цены на мои услуги по разработке и настройке.',
    prices: [
      {
        service: 'Создание Discord сервера',
        cost: '200 рублей'
      },
      {
        service: 'Создание самописного бота Discord/Telegram + хостинг',
        cost: '500 рублей'
      },
      {
        service: 'Создание сайта',
        cost: 'от 500 рублей'
      }
    ],
    note: '⚠️ Цены могут меняться!',
    link: 'https://t.me/santa2555555',
    buttonText: 'Связаться'
  },
  'meme-alerts': {
    title: '😂 Meme Alerts',
    description: 'Отправь мем на стрим! Твой мем появится на экране во время трансляции.',
    features: [
      '😂 Отправка мемов',
      '📺 Показ на стриме',
      '🎉 Веселая атмосфера',
      '⚡ Быстрая модерация'
    ],
    link: 'https://memealerts.com/69a85e9046c2e18f5e81a654',
    buttonText: 'Отправить мем'
  },
  'my-websites': {
    title: '🌐 Созданные мною сайты',
    description: 'Коллекция веб-сайтов, которые я создал. Каждый проект уникален и сделан с душой!',
    websites: [
      {
        name: 'Elfiriya',
        url: 'https://elfiriya-site.vercel.app/',
        description: 'Персональный сайт'
      },
      {
        name: 'Konstanta',
        url: 'https://konstanta-site.vercel.app/',
        description: 'Сайт проекта'
      }
    ],
    link: '#',
    buttonText: 'Посмотреть сайты'
  }
};

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');
const socialButtons = document.querySelectorAll('[data-social]');

socialButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const socialType = button.getAttribute('data-social');
    const data = socialData[socialType];
    
    // Специальная обработка для "Прайс-лист"
    if (socialType === 'price-list') {
      const pricesHTML = data.prices.map(item => 
        `<div class="price-item">
          <div class="price-item-title">${item.service}</div>
          <div class="price-item-cost">${item.cost}</div>
        </div>`
      ).join('');
      
      modalBody.innerHTML = `
        <h2>${data.title}</h2>
        <p class="modal-description">${data.description}</p>
        ${pricesHTML}
        <div class="price-note">${data.note}</div>
        <a href="${data.link}" target="_blank" rel="noopener noreferrer" class="modal-button price-contact">${data.buttonText} →</a>
      `;
    }
    // Специальная обработка для "Созданные мною сайты"
    else if (socialType === 'my-websites') {
      const websitesHTML = data.websites.map(site => 
        `<a href="${site.url}" target="_blank" rel="noopener noreferrer" class="website-link">
          <div class="website-item">
            <span class="website-name">${site.name}</span>
            <span class="website-arrow">→</span>
          </div>
        </a>`
      ).join('');
      
      modalBody.innerHTML = `
        <h2>${data.title}</h2>
        <p class="modal-description">${data.description}</p>
        <div class="websites-list">
          ${websitesHTML}
        </div>
      `;
    } else {
      const isDisabled = socialType === 'discord-bot';
      const buttonHTML = isDisabled
        ? `<div class="modal-button disabled">${data.buttonText}</div>`
        : `<a href="${data.link}" target="_blank" rel="noopener noreferrer" class="modal-button">${data.buttonText} →</a>`;
      
      modalBody.innerHTML = `
        <h2>${data.title}</h2>
        <p class="modal-description">${data.description}</p>
        <div class="features">
          ${data.features.map(feature => `<div class="feature-item">${feature}</div>`).join('')}
        </div>
        ${buttonHTML}
      `;
    }
    
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 300);
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
  }
});
=======
const socialData = {
  discord: {
    title: '🎮 Discord Server',
    description: 'Присоединяйся к моему Discord серверу! Здесь мы общаемся, играем вместе и делимся новостями.',
    features: [
      '💬 Активное комьюнити',
      '🎮 Совместные игры',
      '📢 Анонсы стримов',
      '🎁 Розыгрыши и ивенты'
    ],
    link: 'https://discord.gg/P49aSDaZ4x',
    buttonText: 'Присоединиться'
  },
  fear: {
    title: '🌐 Fear Project',
    description: 'Официальный публичный сервер Fear Project. Присоединяйся к нашему проекту!',
    features: [
      '🎯 Уникальный контент',
      '👥 Дружное сообщество',
      '🔥 Регулярные обновления',
      '⚡ Активная поддержка'
    ],
    link: 'https://fearproject.ru',
    buttonText: 'Перейти на сайт'
  },
  twitch: {
    title: '📺 Twitch Channel',
    description: 'Смотри мои стримы на Twitch! Играю в разные игры, общаюсь с чатом и создаю контент.',
    features: [
      '🎮 Разнообразные игры',
      '💬 Общение с чатом',
      '🎬 Качественный контент',
      '⏰ Регулярные стримы'
    ],
    link: 'https://www.twitch.tv/santa_game2555',
    buttonText: 'Смотреть стримы'
  },
  youtube: {
    title: '📺 YouTube Channel',
    description: 'Подписывайся на мой YouTube канал! Здесь ты найдешь интересные видео, гайды и развлекательный контент.',
    features: [
      '🎬 Интересные видео',
      '📚 Полезные гайды',
      '🎮 Игровой контент',
      '⚡ Регулярные обновления'
    ],
    link: 'https://www.youtube.com/@santa-u5f',
    buttonText: 'Подписаться'
  },
  'telegram-channel': {
    title: '📢 Telegram Channel',
    description: 'Подписывайся на мой Telegram канал для новостей, анонсов и эксклюзивного контента!',
    features: [
      '📰 Новости и анонсы',
      '🎬 Эксклюзивный контент',
      '⚡ Быстрые обновления',
      '📸 Фото и видео'
    ],
    link: 'https://t.me/santa2555555channal',
    buttonText: 'Подписаться'
  },
  'telegram-contact': {
    title: '💬 Telegram Contact',
    description: 'Свяжись со мной напрямую через Telegram для вопросов, предложений или сотрудничества.',
    features: [
      '📩 Прямая связь',
      '🤝 Сотрудничество',
      '💡 Предложения',
      '❓ Вопросы и ответы'
    ],
    link: 'https://t.me/santa2555555',
    buttonText: 'Написать'
  },
  'clan': {
    title: '🎮 Лучший клан "ЧИТОРЫ"',
    description: 'Присоединяйся к нашему игровому клану! Мы играем вместе, участвуем в турнирах и просто весело проводим время.',
    features: [
      '👥 Дружная команда',
      '🏆 Участие в турнирах',
      '🎮 Совместные игры',
      '💪 Прокачка навыков',
      '🎉 Веселая атмосфера',
      '⚡ Активное комьюнити'
    ],
    link: 'https://discord.gg/MUum5ZJXkH',
    buttonText: 'Вступить в клан'
  },
  'donation': {
    title: '💰 Поддержать донатом',
    description: 'Хочешь поддержать мой контент? Любой донат помогает развивать канал и создавать больше качественного контента для вас!',
    features: [
      '❤️ Поддержка стримера',
      '🎁 Возможность отправить сообщение',
      '⭐ Появление в топе донатеров',
      '🔔 Уведомление на стриме'
    ],
    link: 'https://www.donationalerts.com/r/santa_game2555',
    buttonText: 'Задонатить'
  },
  'price-list': {
    title: '💰 Прайс-лист услуг',
    description: 'Актуальные цены на мои услуги по разработке и настройке.',
    prices: [
      {
        service: 'Создание Discord сервера',
        cost: '200 рублей'
      },
      {
        service: 'Создание самописного бота Discord/Telegram + хостинг',
        cost: 'от 500 рублей'
      },
      {
        service: 'Создание сайта',
        cost: 'от 500 рублей'
      }
    ],
    note: '⚠️ Цены могут меняться!',
    link: 'https://t.me/santa2555555',
    buttonText: 'Связаться'
  },
  'meme-alerts': {
    title: '😂 Meme Alerts',
    description: 'Отправь мем на стрим! Твой мем появится на экране во время трансляции.',
    features: [
      '😂 Отправка мемов',
      '📺 Показ на стриме',
      '🎉 Веселая атмосфера',
      '⚡ Быстрая модерация'
    ],
    link: 'https://memealerts.com/69a85e9046c2e18f5e81a654',
    buttonText: 'Отправить мем'
  },
  'my-websites': {
    title: '🌐 Мой проекты',
    description: 'Мой проекты. Каждый проект уникален и сделан с душой!',
    websites: [
      {
        name: 'Сайт',
        url: 'https://santa2555555-portfolio.vercel.app/',
        description: 'Персональный сайт'
      },  
    ],
    link: '#',
    buttonText: 'Посмотреть сайты'
  }
};

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');
const socialButtons = document.querySelectorAll('[data-social]');

socialButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const socialType = button.getAttribute('data-social');
    const data = socialData[socialType];
    
    // Специальная обработка для "Прайс-лист"
    if (socialType === 'price-list') {
      const pricesHTML = data.prices.map(item => 
        `<div class="price-item">
          <div class="price-item-title">${item.service}</div>
          <div class="price-item-cost">${item.cost}</div>
        </div>`
      ).join('');
      
      modalBody.innerHTML = `
        <h2>${data.title}</h2>
        <p class="modal-description">${data.description}</p>
        ${pricesHTML}
        <div class="price-note">${data.note}</div>
        <a href="${data.link}" target="_blank" rel="noopener noreferrer" class="modal-button price-contact">${data.buttonText} →</a>
      `;
    }
    // Специальная обработка для "Созданные мною сайты"
    else if (socialType === 'my-websites') {
      const websitesHTML = data.websites.map(site => 
        `<a href="${site.url}" target="_blank" rel="noopener noreferrer" class="website-link">
          <div class="website-item">
            <span class="website-name">${site.name}</span>
            <span class="website-arrow">→</span>
          </div>
        </a>`
      ).join('');
      
      modalBody.innerHTML = `
        <h2>${data.title}</h2>
        <p class="modal-description">${data.description}</p>
        <div class="websites-list">
          ${websitesHTML}
        </div>
      `;
    } else {
      const isDisabled = socialType === 'discord-bot';
      const buttonHTML = isDisabled
        ? `<div class="modal-button disabled">${data.buttonText}</div>`
        : `<a href="${data.link}" target="_blank" rel="noopener noreferrer" class="modal-button">${data.buttonText} →</a>`;
      
      modalBody.innerHTML = `
        <h2>${data.title}</h2>
        <p class="modal-description">${data.description}</p>
        <div class="features">
          ${data.features.map(feature => `<div class="feature-item">${feature}</div>`).join('')}
        </div>
        ${buttonHTML}
      `;
    }
    
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 300);
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
  }
});

// About Me Toggle
const aboutToggle = document.getElementById('aboutToggle');
const aboutContent = document.getElementById('aboutContent');
const leftColumn = document.querySelector('.left-column');
const rightColumn = document.querySelector('.right-column');

aboutToggle.addEventListener('click', () => {
  const isActive = aboutToggle.classList.contains('active');
  
  if (!isActive) {
    aboutToggle.classList.add('active');
    aboutContent.classList.add('show');
    leftColumn.classList.add('hide');
    rightColumn.classList.add('hide');
  } else {
    aboutToggle.classList.remove('active');
    aboutContent.classList.remove('show');
    leftColumn.classList.remove('hide');
    rightColumn.classList.remove('hide');
  }
});
>>>>>>> 1c8b5fb299285d37113654043f4f6d35536af806
