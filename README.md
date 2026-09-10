# Мебельная фабрика «Славика»

Сайт-визитка по концепции **«Материал и чертёж»** (Architectural Cut).

- Стек: [Astro](https://astro.build) (статический билд)
- Хостинг: GitHub Pages (`/mebel-slavika/`)
- Контакты и факты — только реальные данные фабрики

## Локальный запуск

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
npm run preview
```

## Что заменить перед продакшеном

Все изображения в `public/images/` — **стоковые** (Unsplash / Pexels), подобраны как стилевой ориентир.

**Обязательно замените** на реальные фото работ из группы [vk.ru/mebelslavika](https://vk.ru/mebelslavika):

| Файл | Назначение |
|------|------------|
| `hero-kitchen.webp` | Hero full-bleed |
| `dir-*.webp` | Направления |
| `project-*.webp` | Блок проектов |
| `design-3d.webp` | Блок 3D |
| `og-kitchen.webp` | Open Graph |

После замены фото уберите пометки «Фото-заглушка» в блоке проектов (`src/pages/index.astro`).

## Заявки

Форма не шлёт на фейковый endpoint: открывает [vk.me/mebelslavika](https://vk.me/mebelslavika) (текст копируется в буфер) или `mailto:` / `tel:`.

## Деплой

Push в `main` → GitHub Actions → GitHub Pages.
