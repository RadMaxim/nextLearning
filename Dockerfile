# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Копируем package.json для кэширования слоя
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Открываем порт
EXPOSE 3000

# Запускаем Next.js в режиме разработки
CMD ["npm", "run", "dev"]
# ИЛИ если в package.json нет скрипта "dev":
# CMD ["npx", "next", "dev"]