# Тестовое задание для Alfa Ecosystem

## Команды для запуска

- `npm run dev` - запуск проекта в режиме разработки
- `npm run build` - сборка проекта

## Стек технологий

- `Vite` - для быстрой удобной сборки
- `React` - для работы с интерактивными элементами страницы
- `TypeScript` - для создания предсказуемой безопасной логики
- `Redux Toolkit` - для хранения состояний переменных

## Методологии

- `БЭМ`: все стили именованы по данной методологии
- `DRY`: по возможности используется переиспользование кода и стилей
- `KISS`: приложение разбито на простые компоненты, а их имена и именование классов максимально приближены к тому, что они делают, стилизуют или отрисовывают

## Структура проекта

- `public/`: папка, где хранятся картинки, иконки, и прочие неизменяемые ресурсы проекта
- `scr/`: папка с ресурсами проекта
  - `components/`: папка с отдельными компонентами, которые составляют проект
  - `slices/`: папка с файлами, отвечающими за работу стейт-менеджера Redux
  - `types/`: папка с файлами типов, которые используются в переменных
  - `variables/`: папка с файлами переменных (глобальные стили, цвета, стили шрифтов, данные переменных, которые использует приложение)
  - `utils`: папка с функциями, код которых целесообразно вынести в отдельные файлы

## Особенности

- для задания используется api `https://openlibrary.org/dev/docs/api/search`
- HTML код прошел валидацию w3.org
- CSS прошел валидацию BEM
- все изменяющиеся данные по возможности вынесены в переменные, чтобы избавиться от магических значений
