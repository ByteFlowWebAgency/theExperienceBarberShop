# Base Image for Build Stage
FROM node:24-alpine AS base
WORKDIR /app
COPY package*.json ./

# Install dependencies only in the development stage
FROM base AS development
# Install exactly what package-lock.json pins; no package lifecycle scripts are needed
RUN npm ci --ignore-scripts
COPY . .

# Build Stage
FROM base AS builder
RUN npm ci --ignore-scripts
COPY . .
RUN npm run build

# Base image for Runtime Stage
FROM node:24-alpine AS production

# Working Directory, owned by the image's unprivileged "node" user
WORKDIR /app
RUN chown node:node /app
USER node

# Copy only essential files from Builder Stage
COPY --from=builder --chown=node:node /app/package*.json /app/
COPY --from=builder --chown=node:node /app/.next /app/.next
COPY --from=builder --chown=node:node /app/public /app/public

# Install production dependencies
RUN npm ci --omit=dev --ignore-scripts

# Run the project
CMD ["npm", "start"]
