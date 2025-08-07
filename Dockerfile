FROM node:23.7.0-alpine3.20
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g nodemon
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
