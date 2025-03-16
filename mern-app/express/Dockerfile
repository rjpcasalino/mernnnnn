# Use an official Node.js image as a base
FROM node:23-slim

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json file and install the dependencies
COPY package.json ./
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Expose port 8080 for the Express app to listen on
EXPOSE 8080
# Set the command to start the Express app
# Don’t use synchronous functions
CMD ["npm", "start", "--trace-sync-io"]

