#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting Dwella.zone Development Server${NC}"

# Function to check if port 3000 is in use
check_port() {
    if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
        return 0
    else
        return 1
    fi
}

# Kill any process running on port 3000
if check_port; then
    echo -e "${YELLOW}⚠️  Port 3000 is in use. Killing existing processes...${NC}"
    
    # Get PIDs using port 3000
    PIDS=$(lsof -ti:3000)
    
    if [ ! -z "$PIDS" ]; then
        echo -e "${YELLOW}Found processes: $PIDS${NC}"
        
        # Kill each process
        for pid in $PIDS; do
            echo -e "${YELLOW}Killing process $pid...${NC}"
            kill -9 $pid 2>/dev/null
        done
        
        # Wait a moment for processes to fully terminate
        sleep 2
        
        # Check if port is now free
        if check_port; then
            echo -e "${RED}❌ Failed to free port 3000. Please manually kill the processes.${NC}"
            exit 1
        else
            echo -e "${GREEN}✅ Successfully freed port 3000${NC}"
        fi
    fi
else
    echo -e "${GREEN}✅ Port 3000 is available${NC}"
fi

# Navigate to the web app directory
cd apps/web

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    pnpm install
fi

# Start the development server
echo -e "${GREEN}🚀 Starting Next.js development server on port 3000...${NC}"
echo -e "${GREEN}📍 Local: http://localhost:3000${NC}"
echo -e "${GREEN}🌐 Network: http://0.0.0.0:3000${NC}"
echo -e "${YELLOW}Press Ctrl+C to stop the server${NC}"

# Start the dev server
pnpm dev 