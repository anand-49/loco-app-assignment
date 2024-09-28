# Step 1: Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the application code
COPY . .

# Step 2: Final stage for production
FROM node:18-alpine

# Set working directory for runtime
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app /app

# Expose port 80 for the application
EXPOSE 80

# Start the application
CMD ["npm", "start"]