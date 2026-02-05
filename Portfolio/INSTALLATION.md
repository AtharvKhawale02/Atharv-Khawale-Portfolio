# INSTALLATION GUIDE FOR ATHARV'S PORTFOLIO

## Important Note About PowerShell Execution Policy

If you encounter an error like "running scripts is disabled on this system", you have two options:

### Option 1: Temporary Fix (Recommended for Testing)
Run this command in PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Option 2: Use Command Prompt Instead
Open Command Prompt (cmd.exe) instead of PowerShell and run the npm commands there.

## Step-by-Step Installation

1. **Open Terminal** (PowerShell or Command Prompt)

2. **Navigate to project folder:**
```bash
cd "d:\My Project\Portfolio Updated"
```

3. **Install all dependencies:**
```bash
npm install
```

This will install:
- React & React DOM
- Framer Motion (for animations)
- React Icons
- React Type Animation
- React Intersection Observer
- Vite (build tool)
- Tailwind CSS
- And all other required packages

4. **Start the development server:**
```bash
npm run dev
```

5. **Open your browser and visit:**
```
http://localhost:5173
```

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Troubleshooting

### If npm commands don't work:
1. Make sure Node.js is installed (check with `node --version`)
2. Download Node.js from: https://nodejs.org/ (LTS version)
3. Restart your terminal after installation

### If port 5173 is already in use:
Vite will automatically use the next available port

### If you see dependency errors:
```bash
npm cache clean --force
npm install
```

## Features to Explore

Once the server is running, you'll see:
✨ Animated loading screen
🎨 Particle background effects
📱 Fully responsive design
🎭 Smooth scroll animations
⚡ Fast performance with Vite
🎨 Beautiful gradient effects
💫 Interactive hover effects
📊 Animated skill bars
🏆 Achievement cards with animations

Enjoy your new portfolio! 🚀
