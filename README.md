# Учет библиотеки
 CRUD приложение учета книг и абонентов библиотеки с возможностью ведения посрочек абонентов и личным кабинетом абонента.
<p align="center">
<img width="49%" src="assets/example.gif" />
</p>

## Возможности
⚡ Создание/Редактирование/Удаление книг

⚡ Создание/Редактирование/Удаление издательств

⚡ Создание/Редактирование/Удаление издательств

⚡ Создание/Редактирование/Удаление авторов

⚡ Создание/Редактирование/Удаление жанров

⚡ Создание/Редактирование/Удаление абонентов

⚡ Начисление/Списывание штрафов абонентов

⚡ Автоматическое начисление штрафа при несдачи книги в срок

⚡ Формирование журналов добления / утери / выдачи книг  / оплаты штрафов

⚡ Аутенентификация, Авторизация и Регистрация пользователей

⚡ JWT + BCrypt

⚡ 3 роли: Администратор, библиотекарь и абонент

⚡ Темная/Светлая тема

 ## Скриншоты
<p align="center">
    <img width="375" src="assets/example1.png" />
    <img width="300" src="assets/example2.png" />
    <img width="300" src="assets/example3.png" />
    <img width="300" src="assets/example4.png" />
    <img width="300" src="assets/example5.png" />
    <img width="300" src="assets/example6.png" />
    <img width="300" src="assets/example7.png" />
    <img width="300" src="assets/example8.png" />
        
  
</p>

 ## Попробовать
[JRE](https://github.com/wracce/bibliography/releases/tag/v0.0.1)

Для запуска (Поменяйте логин и пароль Postgres на свой):
```bash
java -jar bibliography-0.0.1.jar  --spring.datasource.username=postgres --spring.datasource.password=5432
```



## Стек технологий
Frontend:
 * TypeScript
 * Angular
 * TaigaUI

 Backend: 
 * Java
 * Spring / PostgreSQL
 * Spring Boot / Spring Security / Spring WEB

Методология: 
 * Prettier
 * BEM, SOLID

## Сборка / Запуск


1. Установка зависимостей

фронтенд:
```bash
npm install
```

бэкэнд:
```bash
mvn clean install
```

2. Сборка фронтенд части

```bash
ng build
```

3. Скопировать собранные файлы в папку static бэкэнда

4. Сборка бэкэнда
```bash
mvn compile
mvn package
```

5. Запуск проекта:
```bash
java -jar target/bibliography-0.0.1-SNAPSHOOT.jar --spring.datasource.username=postgres --spring.datasource.password=5432
```

## Лицензия
MIT license!
