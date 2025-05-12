FROM node:latest

# Set the working directory to /app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN cd ./src && npx prisma generate

EXPOSE 8585

CMD ["npm", "run", "dev"]