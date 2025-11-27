import React, { useState, useEffect } from 'react';
import CensusForm from './components/CensusForm';
import ReviewDetails from './components/ReviewDetails';
import './App.css';
import './help-styles.css';

function App() {
  const [currentStep, setCurrentStep] = useState('form'); // 'form' or 'review'
  const [formData, setFormData] = useState({
    respondentId: '',
    fullName: '',
    occupation: '',
    ageHead: '',
    address: '',
    city: '',
    province: 'Ontario',
    country: 'Canada',
    postalCode: '',
    householdCount: '',
    submissionDate: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Auto-generate respondent ID and set submission date
  useEffect(() => {
    const generateRespondentId = () => {
      const prefix = 'SC';
      const timestamp = Date.now().toString().slice(-6);
      return `${prefix}${timestamp}`;
    };

    const today = new Date().toISOString().split('T')[0];
    
    setFormData(prev => ({
      ...prev,
      respondentId: generateRespondentId(),
      submissionDate: today
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.occupation.trim()) newErrors.occupation = 'Occupation is required';
    if (!formData.ageHead || formData.ageHead < 18) newErrors.ageHead = 'Age must be 18 or older';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.province.trim()) newErrors.province = 'Province is required';
    
    const canadianPostalPattern = /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/i;
    
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    } else if (!canadianPostalPattern.test(formData.postalCode)) {
      newErrors.postalCode = 'Invalid postal code format. Use Canadian format (A1A 1A1)';
    }
    
    if (!formData.householdCount || formData.householdCount < 1) {
      newErrors.householdCount = 'Household count must be at least 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setCurrentStep('review');
  };

  const handleCancel = () => {
    // Return to blank form
    const today = new Date().toISOString().split('T')[0];
    const generateRespondentId = () => {
      const prefix = 'SC';
      const timestamp = Date.now().toString().slice(-6);
      return `${prefix}${timestamp}`;
    };

    setFormData({
      respondentId: generateRespondentId(),
      fullName: '',
      occupation: '',
      ageHead: '',
      address: '',
      city: '',
      province: 'Ontario',
      country: 'Canada',
      postalCode: '',
      householdCount: '',
      submissionDate: today
    });
    setCurrentStep('form');
    setErrors({});
    setSubmitMessage('');
  };

  const handleEdit = () => {
    // Return to form with current data
    setCurrentStep('form');
  };

  const handleConfirm = async () => {
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Store in localStorage
      const submissions = JSON.parse(localStorage.getItem('censusSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        submittedAt: new Date().toISOString()
      };
      submissions.push(newSubmission);
      localStorage.setItem('censusSubmissions', JSON.stringify(submissions));
      
      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage(`Form submitted successfully! Reference: ${formData.respondentId}`);
      
      // After successful submission, show success and reset
      setTimeout(() => {
        handleCancel(); // Reset to blank form
      }, 3000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="App">
      {submitMessage && (
        <div className={`message ${submitMessage.includes('Error') ? 'error' : 'success'}`}>
          {submitMessage}
        </div>
      )}
      
      {currentStep === 'form' ? (
        <CensusForm 
          formData={formData}
          onChange={handleChange}
          onSubmit={handleFormSubmit}
          errors={errors}
        />
      ) : (
        <ReviewDetails 
          formData={formData}
          onCancel={handleCancel}
          onEdit={handleEdit}
          onConfirm={handleConfirm}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
}

export default App;
