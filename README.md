# Canadian Census Form - System Design Lab

## Project Metadata
- Author: System Design Form Lab
- Created: 2025-11-26
- Platform: React 19.2.0 + Express.js 5.0.1
- Package Manager: npm
- Frontend: Create React App with custom Canadian census form
- Backend: Express server with JSON file storage

## Overview
This project demonstrates a complete full-stack Canadian Census Form implementation with React frontend and Express backend. The application features Canadian-specific validation, professional government form styling, hover help functionality, and JSON-based data persistence.

## 📥 Quick Download

**Get the complete project instantly:**

[![Download SYSTEMDESIGNFORMLAB9](https://img.shields.io/badge/Download-SYSTEMDESIGNFORMLAB9.zip-blue?style=for-the-badge&logo=download)](https://github.com/hjoseph777/SystemDesignFormLab9/releases/download/v1.0/SYSTEMDESIGNFORMLAB9.zip)

*Complete Canadian Census Form project ready to run*

## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Render-000000?style=for-the-badge&logo=render&logoColor=white)](https://placeholder-canadian-census-form.onrender.com)

*Experience the Canadian Census Form application live*

## Quick Start

**Start the complete application:**

```bash
# Navigate to project root
cd SystemDesignFormLab9

# Start both frontend and backend simultaneously
./start-app.sh
```

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Important: Where your form code lives
- The main census form component is in [`canadian-census-form/src/components/CensusForm.js`](canadian-census-form/src/components/CensusForm.js) with Canadian validation and help functionality
- The form styling is in [`canadian-census-form/src/App.css`](canadian-census-form/src/App.css) with professional government appearance
- The backend API is in [`canadian-census-backend/server.js`](canadian-census-backend/server.js) with Canadian validation

## Project Explorer
An interactive, collapsible view of the codebase. Click file names to open them.

<details open>
   <summary><strong>canadian-census-form/ - Frontend Application</strong></summary>

   - 📁 <strong>canadian-census-form</strong>
      - 📄 [`package.json`](canadian-census-form/package.json) - Frontend dependencies & scripts
      - 📁 <strong>src</strong>
         - 📄 [`App.js`](canadian-census-form/src/App.js) - Main application component with routing
         - 📄 [`App.css`](canadian-census-form/src/App.css) - **Complete form styling with government appearance**
         - 📄 [`help-styles.css`](canadian-census-form/src/help-styles.css) - Help button and popup window styles
         - 📄 [`index.js`](canadian-census-form/src/index.js) - React DOM entry point
         - 📁 <strong>components</strong>
            - 📋 [`CensusForm.js`](canadian-census-form/src/components/CensusForm.js) - **Main census form with Canadian validation**
            - 📊 [`ReviewDetails.js`](canadian-census-form/src/components/ReviewDetails.js) - Form review and submission component
</details>

<details>
   <summary><strong>Backend API Server</strong></summary>

   - 📁 <strong>canadian-census-backend</strong>
      - 🚀 [`server.js`](canadian-census-backend/server.js) - **Express API with Canadian validation**
      - 📦 [`package.json`](canadian-census-backend/package.json) - Backend dependencies
      - 📁 <strong>data</strong>
         - 📄 `submissions.json` - Form submission storage (auto-generated)
</details>

<details>
   <summary><strong>Configuration & Scripts</strong></summary>

   - 🚀 [`start-app.sh`](start-app.sh) - Concurrent startup script
   - 🚀 [`start-app.bat`](start-app.bat) - Windows startup script
   - 📝 [`README.md`](README.md) - Project documentation
   - ⚙️ [`.gitignore`](.gitignore) - Git exclusions
</details>

## File Structure

```text
SystemDesignFormLab9/
├── 📁 canadian-census-form/         # Frontend React Application
│   ├── 📁 public/                   # Static assets
│   │   ├── 🌐 index.html           # Main HTML template
│   │   ├── 📄 manifest.json        # PWA manifest
│   │   └── 🤖 robots.txt           # SEO robots file
│   │
│   ├── 📁 src/                      # Source code
│   │   ├── 📱 App.js               # Main app component
│   │   ├── 🎨 App.css              # **Complete form styling**
│   │   ├── ❓ help-styles.css       # Help system styles
│   │   ├── 🏠 index.js             # React entry point
│   │   └── 📁 components/
│   │       ├── 📋 CensusForm.js    # **Main census form component**
│   │       └── 📊 ReviewDetails.js  # Review & submission
│   │
│   └── 📦 package.json             # Frontend dependencies
│
├── 📁 canadian-census-backend/      # Backend Express Server
│   ├── 🚀 server.js               # **Express API with validation**
│   ├── 📦 package.json            # Backend dependencies
│   └── 📁 data/
│       └── 📄 submissions.json     # Form storage (auto-generated)
│
├── 🚀 start-app.sh                 # Linux/Mac startup script
├── 🚀 start-app.bat                # Windows startup script
└── 📝 README.md                   # Main project documentation
```

### Quick Code Reference
| Icon | Type | Path | Purpose |
|------|------|------|---------|
| 📱 | Component | [`canadian-census-form/src/App.js`](canadian-census-form/src/App.js) | Main application component |
| 📋 | Component | [`canadian-census-form/src/components/CensusForm.js`](canadian-census-form/src/components/CensusForm.js) | **Main census form with validation** |
| 📊 | Component | [`canadian-census-form/src/components/ReviewDetails.js`](canadian-census-form/src/components/ReviewDetails.js) | Form review and submission |
| 🎨 | Styles | [`canadian-census-form/src/App.css`](canadian-census-form/src/App.css) | **Complete form styling** |
| ❓ | Styles | [`canadian-census-form/src/help-styles.css`](canadian-census-form/src/help-styles.css) | Help button and popup styles |
| 🚀 | Server | [`canadian-census-backend/server.js`](canadian-census-backend/server.js) | **Express API with Canadian validation** |
| 🚀 | Script | [`start-app.sh`](start-app.sh) | Concurrent application startup |
| 📦 | Config | [`canadian-census-form/package.json`](canadian-census-form/package.json) | Frontend dependencies |
| 📦 | Config | [`canadian-census-backend/package.json`](canadian-census-backend/package.json) | Backend dependencies |

## Features

### Canadian-Specific Implementation
- ✅ Canadian postal code validation (A1A 1A1 format)
- ✅ All Canadian provinces and territories in dropdown
- ✅ Statistics Canada branding and contact information
- ✅ Government form styling and professional appearance

### Interactive Features
- ✅ Hover help button next to Reference Code
- ✅ Closeable help popup with detailed instructions
- ✅ Real-time form validation with error messages
- ✅ Responsive design for mobile and desktop

### Technical Features
- ✅ React 19.2.0 frontend with hooks (useState)
- ✅ Express 5.0.1 backend with CORS support
- ✅ JSON file storage for form submissions
- ✅ Concurrent frontend/backend development setup
- ✅ Auto-generated submission IDs and timestamps

## Available Scripts

### Development Mode
```bash
# Start both frontend and backend
./start-app.sh          # Linux/Mac
start-app.bat           # Windows

# Or start individually:
cd canadian-census-form
npm start               # Frontend only (port 3000)

cd canadian-census-backend  
npm run dev             # Backend only (port 5000)
```

### Production Build
```bash
cd canadian-census-form
npm run build           # Creates optimized production build
```

### Testing
```bash
cd canadian-census-form
npm test               # Run test suite
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check for backend server |
| POST | `/api/submit-form` | Submit census form data |

## Data Storage
Form submissions are stored in `canadian-census-backend/data/submissions.json` with the following structure:

```json
{
  "id": "SC286383",
  "submissionDate": "2025-11-26",
  "fullName": "John Doe",
  "occupation": "Software Developer",
  "ageHead": "35",
  "address": "123 Main St",
  "city": "Toronto",
  "province": "Ontario",
  "country": "Canada",
  "postalCode": "M5V 2T6",
  "householdSize": "4"
}
```

---

*This project demonstrates modern full-stack React and Express.js development with Canadian government form standards and best practices.*