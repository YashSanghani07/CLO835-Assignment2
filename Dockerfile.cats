# Dockerfile for cats-app

FROM node:14
WORKDIR /app
COPY src/cats-app/ .
RUN npm install
EXPOSE 80
CMD ["node", "app.js"]
