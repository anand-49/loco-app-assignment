# Step 1: Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --production

# Copy the application code
COPY . .

# Step 2: Final stage
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app /app

# Expose port 80 for the application
EXPOSE 80

# Start the application
CMD ["npm", "start"]
