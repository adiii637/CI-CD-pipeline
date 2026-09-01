# Use a lightweight Node.js base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to install dependencies efficiently
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code into the container
COPY . .

# Set the app port inside the container
ENV PORT=5050

# Expose the app port so it can be accessed from outside the container
EXPOSE 5050

# Start the app with the development script
CMD ["npm", "run", "dev"]


