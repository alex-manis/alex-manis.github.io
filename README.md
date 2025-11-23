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

