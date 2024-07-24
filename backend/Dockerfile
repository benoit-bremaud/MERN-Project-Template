# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Set environment variables
ENV NODE_ENV=production

# Command to run the application
# Run in development mode
CMD ["npm", "run", "dev"]

# Run in production mode
# CMD ["npm", "run", "start"]
