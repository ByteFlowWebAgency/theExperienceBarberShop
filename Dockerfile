# Base on Node LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .
COPY next.config.js ./next.config.js

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"] 
