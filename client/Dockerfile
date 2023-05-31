# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Install app dependencies
COPY package*.json ./
# RUN npm install
RUN npm ci

# Copy the rest of the application code
COPY . .

# Expose the port on which your React app will run
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
