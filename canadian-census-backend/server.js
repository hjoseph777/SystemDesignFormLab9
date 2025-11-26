require('dotenv').config();
const express = require('express');
const fs = require('fs-extra');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to JSON file storage
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'submissions.json');

// Initialize storage directory
const initializeStorage = async () => {
  try {
    await fs.ensureDir(DATA_DIR);
    if (!(await fs.pathExists(DATA_FILE))) {
      await fs.writeJson(DATA_FILE, []);
      console.log('Submissions file created');
    }
    console.log('JSON file storage initialized');
  } catch (error) {
    console.error('Storage initialization error:', error);
    process.exit(1);
  }
};

initializeStorage();

// Helper functions for JSON file operations
const readSubmissions = async () => {
  try {
    return await fs.readJson(DATA_FILE);
  } catch (error) {
    console.error('Error reading submissions:', error);
    return [];
  }
};

const writeSubmissions = async (submissions) => {
  try {
    await fs.writeJson(DATA_FILE, submissions, { spaces: 2 });
  } catch (error) {
    console.error('Error writing submissions:', error);
    throw error;
  }
};

// Validation function for Canadian census data
const validateSubmission = (data) => {
  const requiredFields = [
    'respondentId', 'fullName', 'occupation', 'ageHead',
    'address', 'city', 'province', 'postalCode', 'householdCount'
  ];
  
  const errors = [];
  
  requiredFields.forEach(field => {
    if (!data[field] || data[field].toString().trim() === '') {
      errors.push(`${field} is required`);
    }
  });
  
  // Canadian postal code validation only
  if (data.postalCode) {
    const canadianPostalPattern = /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/i;
    
    if (!canadianPostalPattern.test(data.postalCode)) {
      errors.push('Invalid postal code format. Use Canadian postal code format (A1A 1A1)');
    }
  }
  
  // Household count validation
  if (data.householdCount && (isNaN(data.householdCount) || data.householdCount < 1)) {
    errors.push('Household count must be a positive number');
  }
  
  // Age validation
  if (data.ageHead && (isNaN(data.ageHead) || data.ageHead < 18 || data.ageHead > 150)) {
    errors.push('Age must be between 18 and 150');
  }
  
  // Province validation
  const validProvinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
    'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia',
    'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'
  ];
  
  if (data.province && !validProvinces.includes(data.province)) {
    errors.push('Invalid province/territory');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    const submissions = await readSubmissions();
    res.json({
      success: true,
      message: 'Canadian Census Server is healthy',
      storage: 'JSON file',
      totalSubmissions: submissions.length,
      referenceCode: 'SC-2025',
      country: 'Canada'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Storage system error',
      referenceCode: 'SC-2025'
    });
  }
});

// Submit census form endpoint
app.post('/api/submit-census', async (req, res) => {
  try {
    const formData = req.body;
    
    // Validate the submission
    const validation = validateSubmission(formData);
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: validation.errors,
        referenceCode: 'SC-2025'
      });
    }
    
    // Generate submission ID
    const submissionId = `SUB-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Create submission record
    const submission = {
      id: submissionId,
      ...formData,
      country: 'Canada',
      referenceCode: 'SC-2025',
      submissionDate: new Date().toISOString(),
      timestamp: Date.now()
    };
    
    // Read existing submissions and add new one
    const submissions = await readSubmissions();
    submissions.push(submission);
    
    // Save to JSON file
    await writeSubmissions(submissions);
    
    console.log(`[${new Date().toISOString()}] Canadian census submission: ${formData.respondentId} - ${formData.fullName} from ${formData.city}, ${formData.province}`);
    
    res.json({
      success: true,
      message: 'Canadian census form submitted successfully!',
      referenceCode: 'SC-2025',
      reference: submissionId,
      submissionId: submissionId,
      data: submission
    });
    
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      referenceCode: 'SC-2025'
    });
  }
});

// Get all submissions (for debugging)
app.get('/api/submissions', async (req, res) => {
  try {
    const submissions = await readSubmissions();
    res.json({
      success: true,
      count: submissions.length,
      submissions: submissions,
      referenceCode: 'SC-2025'
    });
  } catch (error) {
    console.error('Error retrieving submissions:', error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving submissions',
      referenceCode: 'SC-2025'
    });
  }
});

// Serve static files from React app (for production)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../canadian-census-form/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../canadian-census-form/build/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Canadian Census Server running on port ${PORT}`));