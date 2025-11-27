import React from 'react';

const ReviewDetails = ({ formData, onCancel, onEdit, onConfirm, isSubmitting }) => {
  return (
    <div className="review-container">
      <div className="form-header">
        <h1>Review Your Information</h1>
        <div className="reference-code">Reference Code: SC-2025</div>
        <p>Please review the information you entered. You can edit, cancel, or confirm your submission.</p>
      </div>

      <div className="review-content">
        <div className="review-section">
          <h3>Identification Section</h3>
          <div className="review-item">
            <label>Respondent ID:</label>
            <span>{formData.respondentId}</span>
          </div>
          <div className="review-item">
            <label>Date of Submission:</label>
            <span>{formData.submissionDate}</span>
          </div>
        </div>

        <div className="review-section">
          <h3>Personal Information</h3>
          <div className="review-item">
            <label>Full Name:</label>
            <span>{formData.fullName}</span>
          </div>
          <div className="review-item">
            <label>Occupation:</label>
            <span>{formData.occupation}</span>
          </div>
          <div className="review-item">
            <label>Age of Head of Household:</label>
            <span>{formData.ageHead}</span>
          </div>
        </div>

        <div className="review-section">
          <h3>Household Information</h3>
          <div className="review-item">
            <label>Address:</label>
            <span>{formData.address}</span>
          </div>
          <div className="review-item">
            <label>City:</label>
            <span>{formData.city}</span>
          </div>
          <div className="review-item">
            <label>Province:</label>
            <span>{formData.province}</span>
          </div>
          <div className="review-item">
            <label>Country:</label>
            <span>Canada</span>
          </div>
          <div className="review-item">
            <label>Postal Code:</label>
            <span>{formData.postalCode}</span>
          </div>
          <div className="review-item">
            <label>Number of People in Household:</label>
            <span>{formData.householdCount}</span>
          </div>
        </div>
      </div>

      <div className="review-actions">
        <button type="button" onClick={onCancel} className="cancel-button">
          Cancel
        </button>
        <button type="button" onClick={onEdit} className="edit-button">
          Edit
        </button>
        <button 
          type="button" 
          onClick={onConfirm} 
          className="confirm-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Confirm & Submit'}
        </button>
      </div>

      <div className="review-note">
        <p><strong>Note:</strong> Once you confirm, your information will be submitted to the Canadian Census Bureau database.</p>
      </div>
    </div>
  );
};

export default ReviewDetails;