#!/bin/bash

# Function to check if the backend server is running
check_server() {
  curl --output /dev/null --silent --head --fail "http://localhost:9000/health"
}

# Start the backend server
cd ../
cd ./backend
npm run dev:e2e &  # Run backend server in the background
BACKEND_PID=$!

# Wait for the backend server to be ready
echo "Waiting for the backend server to be ready..."
while ! check_server; do
  sleep 2  # Wait for 2 seconds before checking again
done
echo "Backend server is up and running."

# Run E2E tests
echo "Running E2E tests..."
cd ../
cd ./frontend
npm run test:e2e:ui

# Kill the backend server after tests complete
echo "Shutting down the backend server..."
kill $BACKEND_PID