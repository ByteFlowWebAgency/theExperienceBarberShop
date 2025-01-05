# The Experience Barber & Beauty Shop
Version: 1.0.2

A private Next.js, React, and TypeScript application developed by BYTEFLOW for The Experience Barber & Beauty Shop. This project utilizes Docker for consistent development and deployment environments.

## Project Structure
```
├── .next/
├── app/
├── public/
├── .github/
│   ├── workflows/
│   │   └── dev.yaml        # CI/CD pipeline configuration
│   │   └── prod.yaml       # CI/CD pipeline configuration
│   └── actions-runner/   # Self-hosted runner configuration
├── node_modules/
├── .dockerignore
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── components.json
├── docker-compose.yml
├── Dockerfile
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tailwind.css.ts
└── tsconfig.json
```

## CI/CD Pipeline and GitHub Actions

This project includes automated workflows through GitHub Actions that:
- Enforce code quality standards through ESLint
- Verify proper code formatting
- Run the build process to catch compilation errors
- Execute test suites
- Ensure consistent code style

### Self-Hosted Runner Setup

The pipeline requires a self-hosted GitHub Actions runner with these specifications:

#### Hardware Requirements
- CPU: Minimum 2 cores
- RAM: Minimum 4GB
- Storage: At least 50GB free space
- Network: Stable internet connection with minimum 10Mbps

#### Software Requirements
- Operating System: Ubuntu 20.04 or newer
- Node.js 18.x or newer
- Docker Engine
- Git

### Runner Installation

1. Create runner directory:
```bash
mkdir actions-runner && cd actions-runner
```

2. Download the latest runner package:
```bash
curl -o actions-runner-linux-x64-2.311.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz
```

3. Extract the installer:
```bash
tar xzf ./actions-runner-linux-x64-2.311.0.tar.gz
```

4. Configure the runner:
```bash
./config.sh --url https://github.com/[ORGANIZATION]/[REPOSITORY] --token [YOUR_TOKEN]
```

5. Install and start the service:
```bash
sudo ./svc.sh install
sudo ./svc.sh start
```

For detailed runner setup and management, refer to:
- [GitHub Actions Runner Documentation](https://docs.github.com/en/actions/hosting-your-own-runners)
- [Runner Application Updates](https://docs.github.com/en/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#using-self-hosted-runner-auto-updates)
- [Runner Security Guidelines](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)

## Installing Docker

### Windows with WSL2
1. Enable Windows Subsystem for Linux (WSL):
   ```powershell
   dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   ```
2. Restart your computer
3. Download and install the [WSL2 Linux kernel update package](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
4. Set WSL2 as default:
   ```powershell
   wsl --set-default-version 2
   ```
5. Install Ubuntu from Microsoft Store
6. Download Docker Desktop from [Docker Hub](https://hub.docker.com/editions/community/docker-ce-desktop-windows/)
7. Double-click the installer
8. Ensure "Use WSL 2 instead of Hyper-V" is selected during installation
9. Follow the installation wizard
10. Start Docker Desktop from the Start menu
11. Wait for Docker Desktop to start (whale icon in taskbar turns solid)
12. Open Docker Desktop settings and ensure WSL Integration is enabled for your Linux distribution

### macOS
1. Download Docker Desktop from [Docker Hub](https://hub.docker.com/editions/community/docker-ce-desktop-mac/)
2. Double-click the `.dmg` file
3. Drag Docker to your Applications folder
4. Start Docker Desktop from Applications
5. Wait for Docker Desktop to start (whale icon in menu bar appears)

### Linux (Ubuntu)
```bash
# Update package index
sudo apt-get update

# Install prerequisites
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up stable repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

# Add your user to the docker group (optional)
sudo usermod -aG docker $USER
```

## Quick Start

Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

### Development Environment
```bash
docker compose up development
```
The application will be available at `http://localhost:3000`

### Production Environment
```bash
docker compose up production
```
The application will be available at `http://localhost:3001`

## Project Evolution

This project follows GitFlow conventions for development and releases. Please refer to:

1. [GitFlow Documentation](https://drive.google.com/drive/u/0/folders/1DRfC8TnM-2-GoaxCicyuKToOaUJByOQ_) for branching strategy
2. [Project Documentation](https://docs.google.com/document/d/1Lmjqb_rKNU9S3vdKh-RQKvBCrQTgUSor5kQGkbRw-oc/edit?tab=t.0#heading=h.a6dboee1fzpj) for detailed feature roadmap and upcoming versions

### Branch Structure
- `main`: Production releases
- `dev`: Development branch
- `feature/*`: New features
- `release/*`: Release preparation
- `hotfix/*`: Production fixes

### Version History
- v1.0.2 - Current release

## License

Copyright © 2024 BYTEFLOW. All rights reserved.

This software and its documentation are proprietary and confidential to BYTEFLOW. 
No part of this software may be reproduced, transmitted, or distributed in any form or by any means, 
electronic or mechanical, for any purpose, without the express written permission of BYTEFLOW.

Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.

For licensing inquiries, please contact: byteflowceo@gmail.com
