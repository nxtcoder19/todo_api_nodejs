# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /todo_api

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Start the Node.js application
CMD [ "npm","run", "dev" ]

