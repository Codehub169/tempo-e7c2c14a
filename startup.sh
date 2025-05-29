#!/bin/bash

# Navigate to the script's directory (optional, if script is not in project root)
# DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# cd "$DIR"

# Install dependencies
echo "Installing dependencies..."
if ! npm install; then
  echo "Failed to install dependencies"
  exit 1
fi

# Build the project
echo "Building the project..."
if ! npm run build; then
  echo "Failed to build the project"
  exit 1
fi

# Start the application on port 9000 (as configured in package.json)
echo "Starting the application on port 9000..."
npm run start
