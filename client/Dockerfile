FROM node:latest

WORKDIR /app

# This will copy the package.json and package-lock.json files to the container
COPY package*.json ./

# This will install the dependencies in the container
RUN npm install

# This will copy the rest of the files to the container
# For example, the index.js file and any other files you need
COPY . .

# This will expose the port that the app runs on
EXPOSE 3000

# This will run the app when the container starts
CMD ["npm", "run", "dev"]