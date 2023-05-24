# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your Node.js app will run
EXPOSE 3000

# Set the environment variables for MongoDB connection
ENV MONGO_HOST=mongodb://mongo:27017/app

# Start the Node.js app
CMD ["npm", "start"]
