# Portfolio Site

Современный сайт-визитка с поддержкой темной и светлой темы.

## Технологии

- **React** - UI библиотека
- **Vite** - Сборщик проекта
- **Tailwind CSS** - Стилизация
- **Framer Motion** - Анимации
- **Lucide React** - Иконки

## Установка

```bash
npm install
```

## Запуск в режиме разработки

```bash
npm run dev
```

После запуска сервер разработки автоматически откроет браузер по адресу `http://localhost:5173`

## Сборка для продакшена

```bash
npm run build
```

## Предпросмотр продакшен сборки

```bash
npm run preview
```

## Деплой на GitHub Pages

### Автоматический деплой через GitHub Actions

1. Убедитесь, что в `vite.config.js` указано правильное имя репозитория:
   ```js
   const REPO_NAME = 'MySite' // Замените на имя вашего репозитория
   ```

2. В настройках репозитория GitHub:
   - Перейдите в Settings → Pages
   - В разделе "Source" выберите "GitHub Actions"

3. Запушьте изменения в ветку `main` или `master`:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

4. GitHub Actions автоматически соберет и задеплоит проект

### Ручной деплой

1. Установите `gh-pages` (если еще не установлен):
   ```bash
   npm install --save-dev gh-pages
   ```

2. Убедитесь, что в `vite.config.js` указано правильное имя репозитория

3. Соберите и задеплойте:
   ```bash
   npm run build
   npm run deploy
   ```

4. В настройках репозитория GitHub (Settings → Pages) выберите ветку `gh-pages` как источник

## Структура проекта

```
src/
  ├── components/      # React компоненты
  │   ├── Header/
  │   │   ├── index.jsx
  │   │   └── Header.css
  │   ├── Hero/
  │   │   ├── index.jsx
  │   │   └── Hero.css
  │   ├── Projects/
  │   │   ├── index.jsx
  │   │   └── Projects.css
  │   ├── Contacts/
  │   │   ├── index.jsx
  │   │   └── Contacts.css
  │   ├── Footer/
  │   │   ├── index.jsx
  │   │   └── Footer.css
  │   └── Background/
  │       ├── index.jsx
  │       └── Background.css
  ├── contexts/        # React контексты
  │   └── ThemeContext.jsx
  ├── App.jsx          # Главный компонент
  ├── App.css          # Стили приложения
  ├── main.jsx         # Точка входа
  └── index.css        # Глобальные стили
```

## Настройка

Вы можете изменить данные в компонентах:
- **Hero/index.jsx** - имя и описание
- **Projects/index.jsx** - список проектов
- **Contacts/index.jsx** - контактная информация
- **Footer/index.jsx** - информация в футере

