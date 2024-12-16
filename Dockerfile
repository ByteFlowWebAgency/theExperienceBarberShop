# Base Image for Build Stage
FROM node:20-alpine AS builder

# Working Directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm ci 

# Copy all files over
COPY . ./


# Base image for Runtime Stage
FROM node:20-alpine AS runtime

# Working Directory
WORKDIR /app

# Copy only essential files from Builder Stage
COPY --from=builder /app/package*.json /app/

# Run the project
CMD ["npm", "run", "dev"]
