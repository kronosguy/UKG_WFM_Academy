# Build Docker image
cd academy
docker build -t kronosguy-academy .

# Run container
docker run -p 3000:3000 kronosguy-academy

# Push to registry
docker push your-registry/kronosguy-academy:latest

# Deploy to hosting (AWS ECS, DigitalOcean, etc.)