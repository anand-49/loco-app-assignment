# loco-app-assignment
loco-app-assignment

## Docker Hub Image:
Link: https://hub.docker.com/r/anand49/loco-app

### Dockerfile
```
# Step 1: Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the application code
COPY . .

# Step 2: Final stage for production
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 80

# Start the application
CMD ["npm", "start"]
```
![image](https://github.com/user-attachments/assets/695ef396-92ad-4b88-afb6-bfaacb8c02e5)

![image](https://github.com/user-attachments/assets/01f4487f-a0c7-4c89-b28a-68563333d0e2)

## kubectl all resoruces 
![image](https://github.com/user-attachments/assets/83f8ca32-f353-4ea0-ac09-b71c876b4efa)

### Traffic Generator 

This pod can be used to generate traffic randomly
```
kubectl exec -it pod/traffic-generator -- sh
apk add wrk
wrk -c 5 -t 5 -d 300s -H "Connection: Close" http://loco-app-service:80
```
![image](https://github.com/user-attachments/assets/e2f505c4-bf3d-4258-a631-c94cb68e50b5)

### Horizontal Pod Scaling

hpa.yaml
Number of pods can go upto 10 incase, the load increases.
```
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: loco-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: loco-app-deployment
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 60
```
![image](https://github.com/user-attachments/assets/b4ea305a-2563-4641-873b-0a4a0ec5da95)




