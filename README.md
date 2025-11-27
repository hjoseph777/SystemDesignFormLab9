# Canadian Census Form - System Design Lab

## Project Metadata
- Course: System Design Form Lab
- Author: Harry Joseph
- Created: 2025-11-27
- Platform: React 19.2.0 (Frontend Only)
- Package Manager: npm
- Frontend: Create React App with custom Canadian census form
- Data Storage: Browser localStorage

## Overview
This project demonstrates a complete Canadian Census Form implementation with React frontend. The application features Canadian-specific validation, professional government form styling, hover help functionality, and localStorage data persistence for demonstration purposes.

## 📥 Quick Download

**Get the complete project instantly:**

[![Download SYSTEMDESIGNFORMLAB9](https://img.shields.io/badge/Download-SYSTEMDESIGNFORMLAB9.zip-blue?style=for-the-badge&logo=download)](https://github.com/hjoseph777/SystemDesignFormLab9/releases/download/v1.0/SYSTEMDESIGNFORMLAB9.zip)

*Complete Canadian Census Form project ready to run*

## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://system-design-form-lab9.vercel.app/)

*Experience the Canadian Census Form application live*


## Important: Where your form code lives
- The main census form component is in [`canadian-census-form/src/components/CensusForm.js`](canadian-census-form/src/components/CensusForm.js) with Canadian validation and help functionality
- The form styling is in [`canadian-census-form/src/App.css`](canadian-census-form/src/App.css) with professional government appearance
- Data is stored in browser localStorage for demonstration purposes

## Project Explorer
An interactive, collapsible view of the codebase. Click file names to open them.

<details open>
   <summary><strong>canadian-census-form/ - React Application</strong></summary>

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
   <summary><strong>Configuration & Documentation</strong></summary>

   - 📝 [`README.md`](README.md) - Project documentation
   - ⚙️ [`.gitignore`](.gitignore) - Git exclusions
</details>

## File Structure

```text
SystemDesignFormLab9/
├── 📁 canadian-census-form/         # React Application
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
└── 📝 README.md                   # Project documentation
```

### Quick Code Reference
| Icon | Type | Path | Purpose |
|------|------|------|---------|
| 📱 | Component | [`canadian-census-form/src/App.js`](canadian-census-form/src/App.js) | Main application component |
| 📋 | Component | [`canadian-census-form/src/components/CensusForm.js`](canadian-census-form/src/components/CensusForm.js) | **Main census form with validation** |
| 📊 | Component | [`canadian-census-form/src/components/ReviewDetails.js`](canadian-census-form/src/components/ReviewDetails.js) | Form review and submission |
| 🎨 | Styles | [`canadian-census-form/src/App.css`](canadian-census-form/src/App.css) | **Complete form styling** |
| ❓ | Styles | [`canadian-census-form/src/help-styles.css`](canadian-census-form/src/help-styles.css) | Help button and popup styles |
| 📦 | Config | [`canadian-census-form/package.json`](canadian-census-form/package.json) | Dependencies and scripts |

## Features

### Interactive Features
- ✅ Hover help button next to Reference Code
- ✅ Closeable help popup with detailed instructions
- ✅ Real-time form validation with error messages
- ✅ Responsive design for mobile and desktop

---

*This project demonstrates modern React development with Canadian government form standards and browser-based data persistence.*
